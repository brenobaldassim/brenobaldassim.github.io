<script setup></script>

<template>
  <div class="terminal text-8xl font-Roboto">
    <div class="screen">
      <p class="line1">Breno</p>
      <p class="line2">Baldassim</p>
      <p class="line3">FullStack</p>
      <p class="line4">Developer<span class="cursor text-8xl">_</span></p>
    </div>
  </div>
</template>

<style>
.screen {
  display: inline-block;
  margin: 0;
}

.screen p {
  font-family: 'Intro';
}

p {
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}

span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: var(--app-color-light);
  animation: type 0.5s 0.5s steps(9, end) both;
}

.line2 {
  color: var(--app-color-light);
  animation: type 0.5s 1s steps(9, end) both;
}
.line3 {
  color: #fff;
  animation: type 0.5s 1.5s steps(9, end) both;
}
.line4 {
  color: #fff;
  animation: type 0.5s 2s steps(9, end) both;
}

.cursor {
  animation: blink 1s 2.75s infinite;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes type {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .cursor{
    font-size: 40px;
  }
  .line1, .line2, .line3, .line4{
      font-size: 48px;
      white-space: normal;
    }
}
</style>
