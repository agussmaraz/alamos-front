<template>
  <section class="text-gray-600 w-full fixed bottom-0 shadow pt-3 z-10">
    <div class="h-16 rounded-full absolute div-vender z-0">
      <IconCarSale class="w-10 h-10" />
    </div>
    <ul class="flex justify-between items-center px-2">
      <li>
        <IconHome class="w-6 h-6" />
        Inicio
      </li>
      <li>
        <IconFav class="w-6 h-6" />
        Favoritos
      </li>
      <li class="relative mt-5">Ventas</li>
      <li>
        <IconChat class="w-6 h-6" />
        Chats
      </li>
      <li>
        <IconMarket class="w-6 h-6" />
        Marketplace
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
li {
  font-size: 12px;
  display: flex;
  flex-flow: column;
  align-items: center;
}
svg {
  fill: #9b9898;
}
section {
  background-color: white;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
}
.div-vender {
  left: 164px;
  text-align: center;
  top: -22px;
  background-color: white;
  padding-left: 15px;
  padding-top: 13px;
  width: 68px;
  box-shadow: 0px -4px 3px -1px rgba(0, 0, 0, 0.25);
}
</style>
