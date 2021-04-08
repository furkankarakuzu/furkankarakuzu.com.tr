<script>
export default {};
</script>

<template>
  <FurkanContainer>
    <FurkanContent class="mt-2" text="center">
      <FurkanImage
        :src="require('@/assets/img/pp.jpg')"
        alt="Furkan Karakuzu"
      />
    </FurkanContent>
    <FurkanContent text="left">
      <FurkanTitle size="3" class="mt-4">
        Ben Furkan.
      </FurkanTitle>
      <FurkanTitle size="4">
        Türkiye'de yaşayan bir Frontend Developer'ım.
      </FurkanTitle>
      <FurkanContent color="white-50">
        <FurkanText class="mt-4">
          2017 yılında Akdeniz Üniversitesi Manavgat MYO Bilgisayar
          Programcılığına girmem ile ilk kodumu yazdım ve yazılım dünyasına
          'Hello World!' dedim. 2019 yılında mezun olana kadar kendimi
          <FurkanText as="b">HTML CSS </FurkanText> ve
          <FurkanText as="b"> BOOTSTRAP </FurkanText> alanlarında geliştirmeye
          çalıştım.
        </FurkanText>
        <FurkanText class="mt-4">
          2019 yılında Dikey Geçiş Sınavı ile Balıkesir Üniversitesi Bilgisayar
          Mühendisliği bölümüne girdim. 2020 yılının Mart ayında
          <FurkanText as="b">Vue.JS </FurkanText> ile tanıştım ve bir süre
          Vue.JS ile çalışmalar yaptıktan sonra
          <FurkanText as="b">Vuex, Axios, Firebase, Vuetify</FurkanText> gibi
          araçlar kullanarak projeler geliştirdim. Daha sonra Backend hakkında
          fikir sahibi olmak için
          <FurkanText as="b"
            >Node.JS, Express.JS, MongoDB, Socket.io</FurkanText
          >
          gibi teknolojiler kullanmaya başladım.
        </FurkanText>
        <FurkanText class="mt-4">
          2020 Aralık ayında
          <a
            class="text-decoration-none"
            href="https://www.kodluyoruz.org"
            target="_blank"
            >Kodluyoruz</a
          >'un Adana Full Stack Web Development Bootcamp serüvenine katılıp
          başarıyla mezun oldum. Bu eğitim sürecimde
          <FurkanText as="b">React.JS, Node.JS, Express.JS, MongoDB</FurkanText>
          gibi teknolojileri öğrenmeye başladım. Şu an ise aktif olarak
          <FurkanText as="b">Vue.JS </FurkanText> yazıyorum.
        </FurkanText>
      </FurkanContent>
    </FurkanContent>
  </FurkanContainer>
</template>
