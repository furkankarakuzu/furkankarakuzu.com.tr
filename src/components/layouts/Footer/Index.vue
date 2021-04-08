<script>
export default {};
</script>

<template>
  <FurkanContainer class="rounded py-2 px-5">
    <FurkanContainer>
      <FurkanRow>
        <FurkanCol offset="sm-3" sm="6">
          <FurkanRow justifyCenter>
            <FurkanCol class="text-center" col="6" md="3">
              <FurkanIcon
                to="https://twitter.com/furkannjs"
                icon="fab fa-twitter"
                class="fs-4 p-2"
              ></FurkanIcon>
            </FurkanCol>
            <FurkanCol class="text-center" col="6" md="3">
              <FurkanIcon
                to="https://www.youtube.com/channel/UC0stWpFmiEqPVfWJqwrI0Qg"
                icon="fab fa-youtube"
                class="fs-4 p-2"
              ></FurkanIcon>
            </FurkanCol>
            <FurkanCol class="text-center" col="6" md="3">
              <FurkanIcon
                to="https://www.linkedin.com/in/furkankarakuzu/"
                icon="fab fa-linkedin"
                class="fs-4 p-2"
              ></FurkanIcon>
            </FurkanCol>
            <FurkanCol class="text-center" col="6" md="3">
              <FurkanIcon
                to="https://github.com/furkankarakuzu"
                icon="fab fa-github"
                class="fs-4 p-2"
              ></FurkanIcon>
            </FurkanCol>
          </FurkanRow>
        </FurkanCol>
      </FurkanRow>
    </FurkanContainer>
    <FurkanContent class="mt-2" color="white-50">
      <FurkanTitle size="5" text="center">
        Bu sitenin kaynak kodlarına
        <a
          class="text-decoration-none"
          href="https://github.com/furkankarakuzu/furkankarakuzu.com.tr"
          target="_blank"
          >Github</a
        >
        üzerinden ulaşabilirsiniz.
      </FurkanTitle>
    </FurkanContent>
  </FurkanContainer>
</template>
