<template>
  <div class="container">
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="above">
      <slot name="above"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
    <div class="side">
      <slot name="side"></slot>
    </div>
  </div>
</template>

<style lang="postcss">
.container {
  display: grid;
  grid-template-areas:
      "header   header"
      "above    above"
      "content  side"
      "footer   footer";
  grid-template-columns: auto auto;
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}

.side {
  grid-area: side;
}

.footer {
  grid-area: footer;
}

.above {
  grid-area: above;
}

.header, .content, .side, .footer, .above {
  display: grid;
}


</style>