<script>
export default {
  data() {
    return {
      contactForm: {
        name: "",
        surname: "",
        email: "",
        subject: "",
      },
    };
  },
  methods: {
    submitContactForm() {
      console.log(this.contactForm);
      this.clearContactForm();
    },
    clearContactForm() {
      document.getElementById("contact-form").reset();
      document.getElementById("contact-form")[0].focus();
    },
  },
};
</script>
<template>
  <FurkanContainer>
    <FurkanTitle class="my-4" text="center">İletişim</FurkanTitle>
    <FurkanRow>
      <FurkanCol offset="md-3" md="6">
        <FurkanRow>
          <FurkanCol sm="3">
            <FurkanIcon
              to="https://twitter.com/furkannjs"
              icon="fab fa-twitter"
              class="fs-1 p-2"
            ></FurkanIcon>
          </FurkanCol>
          <FurkanCol sm="3">
            <FurkanIcon
              to="https://www.youtube.com/channel/UC0stWpFmiEqPVfWJqwrI0Qg"
              icon="fab fa-youtube"
              class="fs-1 p-2"
            ></FurkanIcon>
          </FurkanCol>
          <FurkanCol sm="3">
            <FurkanIcon
              to="https://www.linkedin.com/in/furkankarakuzu/"
              icon="fab fa-linkedin"
              class="fs-1 p-2"
            ></FurkanIcon>
          </FurkanCol>
          <FurkanCol sm="3">
            <FurkanIcon
              to="https://github.com/furkankarakuzu"
              icon="fab fa-github"
              class="fs-1 p-2"
            ></FurkanIcon>
          </FurkanCol>
        </FurkanRow>
      </FurkanCol>
    </FurkanRow>
    <FurkanRow class="mt-3">
      <FurkanCol sm="6">
        <FurkanImage
          :src="require('@/assets/img/pp.jpg')"
          alt="Furkan Karakuzu"
        />
      </FurkanCol>
      <FurkanCol sm="6" class="my-auto mt-2 mt-sm-0">
        <FurkanForm id="contact-form">
          <FurkanInput
            v-model="contactForm.name"
            icon="fas fa-file-signature"
            placeholder="İsmini giriniz.."
          />
          <br />
          <FurkanInput
            v-model="contactForm.surname"
            icon="fab fa-lastfm-square"
            placeholder="Soyisminizi giriniz.."
          />
          <br />
          <FurkanInput
            type="email"
            v-model="contactForm.email"
            icon="fas fa-mail-bulk"
            placeholder="E-mail adresinizi giriniz.."
          />
          <br />
          <FurkanTextarea
            label="Konu"
            v-model="contactForm.subject"
            areaLabel="Konuyu giriniz.."
            rows="5"
            id="subject"
          />
          <br />
          <FurkanButton
            type="button"
            color="success"
            weight="100"
            @click="submitContactForm"
            >Gönder</FurkanButton
          >
        </FurkanForm>
      </FurkanCol>
    </FurkanRow>
  </FurkanContainer>
</template>
