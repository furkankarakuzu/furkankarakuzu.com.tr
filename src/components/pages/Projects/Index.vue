<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>
<template>
  <FurkanContainer>
    <FurkanRow class="mt-4">
      <FurkanCol class="mt-2" md="6">
        <FurkanText>
          Github API kullanarak çektiğim, bana ait repository leri
          inceleyebilir, indirebilir ve katkıda bulunabilirsiniz.
        </FurkanText>
        <FurkanText>
          Burada bulunan projeleri geliştirirken öğrendiğim bilgileri,
          "tecrübelerimi", geliştirirken keyif aldığım ve zorlandığım şeyleri
          paylaşmayı seviyorum. Yaptığım ve yapacağım paylaşımları görmek
          isterseniz 'Yazılar' ve 'Eğitimler' sekmesinden ulaşabilir,
          inceleyebilirsiniz.
        </FurkanText>
        <FurkanText>
          Projeler hakkında veya herhangi bir konu hakkında sormak istediğiniz,
          öneriniz veya iletişime geçmek isterseniz 'İletişim' sayfasından bana
          ulaşabilirsiniz.
        </FurkanText>
      </FurkanCol>
      <FurkanCol md="6">
        <FurkanContent
          v-if="projects.length < 1"
          class="spinner-border  position-absolute start-50 mt-2"
          role="status"
        >
        </FurkanContent>
        <FurkanAccordion v-else :items="projects" />
      </FurkanCol>
    </FurkanRow>
  </FurkanContainer>
</template>
