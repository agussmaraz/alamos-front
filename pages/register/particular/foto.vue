<template>
    <div class="flex flex-col items-center md:ml-2 lg:mr-8">
        <div class="perfil__edit-photo flex flex-col items-center md:justify-center" :class="{ 'perfil__edit-photo-large': camera }">
            <div v-if="!camera" class="perfil__new-image flex flex-col items-center justify-center cursor-pointer" @click="triggerUpload">
                <div>
                    <!-- <IconImagen class="icon" /> -->
                </div>
                <div class="mt-3 text-center texto">
                    <h2 class="text-base texto">Sube una nueva imagen</h2>
                    <p>PNG, JPG, GIF hasta 10MB</p>
                    <input ref="profilePic" type="file" accept="image/*" style="display: none" @change="pickFile('profilePic')" />
                </div>
            </div>
            <hr />
            <div class="perfil__new-image flex flex-col justify-center items-center pb-6 cursor-pointer relative" :class="{ 'perfil__edit-image-large': camera }" @click="showCamera">
                <div ref="camera" class="profile--camera max-w-full max-h-full absolute flex flex-col items-center mb-8">
                    <video ref="video" playsinline autoplay class="pb-4"></video>
                    <button v-if="camera" id="startbutton" @click="takePic">Sacar foto</button>
                    <canvas ref="canvas" class="hidden"></canvas>
                </div>
                <input ref="takePic" type="file" accept="image/*" capture="camera" style="display: none" @change="showCamera" />

                <div>
                    <!-- <IconCamara class="icon" /> -->
                </div>
                <div class="mt-3 text-center">
                    <h2 v-if="!camera" class="text-base texto">Tomar una nueva fotografia</h2>
                </div>
            </div>
        </div>
        <div class="flex w-full justify-around mt-4 md:justify-center">
            <button class="font-semibold w-32 md:text-sm" @click="triggerCancel">Cancelar</button>
            <button :disabled="preview_image === null" class="perfil__form-button h-8 rounded-md font-semibold text-sm my-4" :class="{ disabled: preview_image === null }" @click="sendPhoto()">Confirmar</button>
        </div>
    </div>
</template>

<script>
    import resizeImage from 'smart-img-resize';
    import { mapActions } from 'vuex';

    export default {
        name: 'PerfilForm',
        props: {
            updatePhoto: {
                type: Function,
                default: () => {},
            },
        },
        data() {
            return {
                preview_image: null,
                camera: false,
            };
        },
        beforeDestroy() {
            if (window.stream && window.stream.getTracks()[0]) {
                window.stream.getTracks()[0].stop();
            }
        },
        methods: {
            ...mapActions({
                confirmUpload: 'auth/updateProfilePic',
            }),
            async sendPhoto() {
                try {
                    await this.confirmUpload(this.preview_image);
                    this.showPhotoInputs(false);
                } catch (error) {
                    console.log('Error al subir foto');
                }
            },
            triggerCancel() {
                if (window.stream && window.stream.getTracks()[0]) {
                    window.stream.getTracks()[0].stop();
                }
                this.camera = false;
                this.showPhotoInputs(false);
            },
            triggerUpload() {
                this.$refs.profilePic.click();
            },
            pickFile(inputRef) {
                this.updatePhoto();
                this.preview_image = null;
                const input = this.$refs[inputRef];
                const img = input.files[0];
                resizeImage(
                    img,
                    {
                        outputFormat: img.type.split('image/')[1],
                        targetWidth: 300,
                        targetHeight: 300,
                        crop: true,
                    },
                    (err, b64img) => {
                        if (err) {
                            // console.error(err);
                            return;
                        }
                        this.updatePhoto(b64img);
                        this.preview_image = b64img;
                    }
                );
            },
            showCamera() {
                if (!this.$device.isMobileOrTablet) {
                    this.initCamera();
                    this.camera = true;
                } else {
                    this.$refs.takePic.click();
                }
            },
            async initCamera() {
                const video = this.$refs.video;
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: { width: 300, height: 300 },
                        audio: false,
                        facingMode: { exact: 'user' },
                    });
                    window.stream = stream;
                    video.srcObject = stream;
                } catch (e) {
                    console.log(e);
                    // errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
                }
            },
            takePic() {
                const canvas = this.$refs.canvas;
                const video = this.$refs.video;
                const context = canvas.getContext('2d');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0);
                const image = canvas.toDataURL('image/jpeg');
                this.updatePhoto(image);
                this.preview_image = image;
            },
        },
    };
</script>

<style scoped>
    button {
        outline: none;
    }
    .icon {
        width: 50px;
        height: 50px;
    }
    .perfil__form-button {
        width: 140px;
        background-color: #9ba7ba;
    }
    .perfil__form-button:hover {
        background-color: #46515f;
    }
    .perfil__edit-photo {
        width: 309px;
    }
    .texto {
        color: #9ba7ba;
    }
    .perfil__new-image {
        width: 235px;
        height: 136px;
    }
    .perfil__edit-image-large {
        height: 300px;
    }
    .perfil__edit-photo hr {
        width: 240px;
        height: 0px;
        background-color: #cbcbcb;
    }
    #startbutton {
        border: 4px solid #e9bf37;
        box-shadow: 0px 4px 6px #32325d24;
        width: 147px;
        height: 36px;
    }
    video {
        width: 216px;
    }
    .profile--camera {
        top: 10px;
    }
    @media screen and (min-width: 1020px) {
        .perfil__edit-photo hr {
            display: none;
        }
        .perfil__edit-photo {
            width: 632px;
            height: 204px;
            flex-flow: wrap;
            justify-content: space-around;
            padding-top: 44px;
        }
        .perfil__new-image {
            width: 235px;
            height: 169px;
        }
        .perfil__edit-image-large {
            height: 300px;
        }
        .perfil__edit-photo-large {
            height: 300px;
        }
    }
    .disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
</style>
