<script>
export default {
  name: "Post",
};
</script>
<template>
  <FurkanRow>
    <FurkanCol col="12" class="p-0 d-flex justify-content-sm-end" sm="3">
      <slot name="PostImage" />
    </FurkanCol>
    <FurkanCol
      col="12"
      class="p-0 ms-sm-2 d-flex flex-column justify-content-between"
      sm="8"
    >
      <FurkanContent>
        <slot name="PostHeader" />
        <slot name="PostBody" />
      </FurkanContent>
      <slot name="PostFooter" />
    </FurkanCol>
  </FurkanRow>
</template>
