<script>
export default {
  props: {
    items: {
      type: [Object, Array],
      default: () => [],
    },
  },
};
</script>

<template>
  <FurkanContent class="accordion" id="accordionExample">
    <FurkanCard class="mt-2" v-for="item in items" :key="item.id">
      <FurkanCardHeader id="headingOne" class="rounded-pill">
        <FurkanTitle
          bg="secondary"
          rounded="pill"
          size="2"
          text="center"
          class="mb-0"
          style="cursor:pointer"
          data-toggle="collapse"
          :data-target="`#${item.id}`"
          aria-expanded="true"
          :aria-controls="item.id"
        >
          <button class="btn" type="button">
            <FurkanTitle text="white" size="5">{{ item.name }}</FurkanTitle>
          </button>
        </FurkanTitle>
      </FurkanCardHeader>

      <FurkanContent
        :id="item.id"
        class="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <FurkanCardBody>
          <FurkanRow>
            <FurkanCol col="8">
              <FurkanText color="white">
                {{
                  item.description
                    ? item.description
                    : "Bir açıklama bulamadık."
                }}
              </FurkanText>
            </FurkanCol>
            <FurkanCol col="4">
              <a :href="item.html_url" target="_blank" class="btn btn-success"
                >Github'da İncele</a
              >
            </FurkanCol>
            <FurkanCol v-if="item.language" col="12">
              {{ item.language }} dili kullanılarak geliştirildi.
            </FurkanCol>
            <FurkanCol class="mt-2" col="12">
              {{ item.created_at }} tarihinde oluşturuldu <br />
              {{ item.updated_at }} tarihinde güncellendi.
            </FurkanCol>
          </FurkanRow>
        </FurkanCardBody>
      </FurkanContent>
    </FurkanCard>
  </FurkanContent>
</template>

<style scoped>
.card {
  background-color: transparent !important;
  border: 0px !important;
}
.btn-check:focus + .btn,
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0 transparent;
}
</style>
