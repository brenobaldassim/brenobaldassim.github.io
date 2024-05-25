<script setup>
const scrollToId = (id) =>{
    let e = document.getElementById(id);
    e.scrollIntoView({behavior: "instant", inline:"nearest"});
}
</script>

<template>
  <div class="sidebar font-Roboto flex flex-col items-center">
    <h2 class="title"> <img src="/src/assets/breno-baldassim_logo.png"/> </h2>
    <ul class="nav text-xl w-full">
      <li>
        <a @click="scrollToId('resume')"><span>Resume</span></a>
      </li>
      <li>
        <a @click="scrollToId('about-me')"><span>About Me</span></a>
      </li>
      <li>
        <a @click="scrollToId('my-skills')"><span>My Skills</span></a>
      </li>
      <li>
        <a @click="scrollToId('projects')"><span>Projects</span></a>
      </li>
      <li>
        <a @click="scrollToId('contact')"><span>Contact</span></a>
      </li>
    </ul>
    <div class="text-3xl mt-8 flex flex-row gap-0.5">
      <a
        class="btn"
        target="_blank"
        href="https://github.com/brenobaldassim"
      >
        <i class='bx bxl-github'></i>
      </a>
      <a
        class="btn ml-1"
        target="_blank"
        href="https://www.linkedin.com/in/breno-baldassim-bb2138196/"
      >
        <i class='bx bxl-linkedin'></i>
      </a>
    </div>
  </div>
</template>

<style>

.sidebar {
  position: fixed;
  float:left;
  top: 0;
  left: 0;
  z-index: 1;
  width: 200px;
  height: 100%;
  background: var(--app-color-base-dark);
  color: var(--app-color-base-light);
  box-shadow: -3px 0 5px 0 #000;
}

.title {
  text-align: center;
  font-size: 20px;
  color: var(--app-color-base-light);
  border-bottom: 1px solid rgb(95,95,95,0.25);
  background-color: #000;
  padding: 20px;
  width: 100%;
  height: 200px;
}

.title img:hover {
  transform: scale(1.1);
  transition: 0.3s;
  transition-timing-function: ease-out;
}

.sidebar ul li {
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid rgb(95,95,95,0.25);
}

.sidebar ul li > a{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sidebar ul li a:hover{
  margin-left: 20px;
  transition: 0.3s;
  transition-timing-function: ease-in-out;
}

.sidebar ul li a span {
  font-weight: 300;
  color: #5F5F5F;
}

.btn:hover,
.sidebar ul li a span:hover {
  color: var(--app-color-light);
}

</style>
