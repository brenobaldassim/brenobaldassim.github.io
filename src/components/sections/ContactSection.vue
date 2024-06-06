<script setup>
import SectionLayout from '../utils/SectionLayout.vue'
import emailjs from '@emailjs/browser'
import { ref } from 'vue';

const tokenEmailjs = import.meta.env.VITE_EMAILJS_TOKEN;
const idEmailjsTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_PORTIFOLIO;
const publicKeyEmailjs = import.meta.env.VITE_EMAILJS_TEMPLATE_PUBLIC_KEY;

const form = ref({
  name: '',
  email: '',
  message: '',
})

const SubmitForm = () => {
  if(form.value.name === "" || form.value.email === "" || form.value.message === ""){
    alert("Please fulfill all input fields")
  }

  let templateparams = {
    from_name: form.value.name,
    email: form.value.email,
    message: form.value.message
  }

  emailjs.send(tokenEmailjs, idEmailjsTemplate, templateparams, publicKeyEmailjs)
    .then(() => alert("Email sent successfully, I'll be reaching out soon!"))
    .catch((err) => console.log("failed to send email", err))
    .finally(() => {
      form.value.name = "";
      form.value.email = "";
      form.value.message = "";
    })
}
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col items-center justify-center w-full text-base md:text-xl mt-4 font-bold">
      <form
        ref="emailForm"
        @submit.prevent="SubmitForm"
        class="md:w-2/4 md:p-4"
      >
        <div class="max-md:hidden text-center p-4 mb-8 md:mb-12 bg-app-base md:p-6 rounded">
          <h1 class="text-4xl">Have you liked my portifolio?</h1>
          <h2 class="text-2xl">Send me an email!</h2>
        </div>
        <div>
          <div class="mb-2 md:mb-8">
            <label>Name:  *</label>
            <input v-model="form.name" placeholder="Geralt de Rivea" type="text" name="name" required>
          </div>
          <div class="mb-2 md:mb-8">
            <label>Email:  *</label>
            <input v-model="form.email" type="email" name="email" placeholder="geralt@derivea.com"  required>
          </div>
          <div class="md:mb-12 mb-8">
            <label>Message:  *</label>
            <textarea v-model="form.message" type="text" class="h-32" placeholder="Hi, I would like to..." />
          </div>
        </div>
        <button
          type="submit"
          class="text-lg w-full bg-app-base rounded border-2 border-app-base hover:text-app-base hover:bg-app-white p-2"
        >
          SEND EMAIL
        </button>
      </form>
    </div>
  </SectionLayout>
</template>

<style scoped>
input,
textarea {
  font-size: 16px;
  border-radius: 4px;
  background-color: var(--app-color-base);
  padding: 4px;
  resize: none;
  margin-top: 10px;
}

button[type="submit"] {
  transition: all 500ms ease-in;
}

::placeholder {
  opacity: 0.3;
}
</style>
