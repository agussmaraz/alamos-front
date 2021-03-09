<template>
    <section class="flex flex-col items-center justify-center">
        <article class="article-auto flex items-center mt-6">
            <IconHeartComplete class="icon-fav" />
            <div>
                <img src="~/assets/img/Subaru.jpg" alt="auto" class="auto-img" />
            </div>
            <div class="article-data pl-2 pt-2">
                <h4 class="uppercase p-linea">{{ fav.linea }}</h4>
                <div class="flex items-center mt-1">
                    <p class="año-auto px-2 p-año">{{ fav.año }}</p>
                    <p class="ml-2 uppercase p-marca">{{ fav.marca }}</p>
                </div>
                <h2 class="font-bold text-lg p-precio mt-2">$ {{ fav.precio }}</h2>
                <hr />
                <article class="flex justify-between p-lugar mt-1">
                    <div class="flex items-center">
                        <IconPin class="mr-2" />
                        {{ fav.lugar }}
                    </div>
                    <div class="flex items-center mr-2">
                        <IconLlave class="mr-2" />
                        {{ fav.dueño }}
                    </div>
                </article>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            fav: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
        data() {
            return {
                date: 'Menos de 1 minuto',
            };
        },
    };
</script>

<style scoped>
    hr {
        color: #c4c4c4;
        width: 90%;
    }
    .icon-autos {
        position: absolute;
        top: 4px;
        left: 0px;
    }
    .icon-fav {
        position: absolute;
        top: 2px;
        right: 3px;
    }
    .icon-share {
        position: absolute;
        bottom: 4px;
        right: 198px;
    }
    .article-auto {
        width: 370px;
        height: 119px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        position: relative;
    }
    .p-linea {
        font-size: 13px;
    }
    .p-km {
        color: #747474;
        font-size: 13px;
    }
    .p-marca {
        font-size: 12px;
        color: #747474;
    }
    .p-año {
        font-size: 12px;
    }
    .p-precio {
        font-size: 18px;
    }
    .icon-km {
        width: 17px;
        height: 17px;
        fill: #747474 !important;
    }
    .p-lugar {
        font-size: 10px;
        color: #747474;
    }
    .article-data {
        background-color: white;
        height: 100%;
        width: 61%;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
    }
    .search {
        top: 16px;
        left: 102px;
        fill: #747474;
    }
    .article-filter {
        background-color: white;
        padding: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
    .año-auto {
        background-color: #f2efef;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    nav {
        background-color: #eaebef;
        padding: 10px;
    }
    .icon-arrow {
        fill: #353535;
    }
    .icon-campana {
        fill: #747474;
    }
    .main {
        background-color: #f2efef;
    }
    .auto-img {
        width: 146px;
        height: 119px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
    }
</style>
