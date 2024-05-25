<script setup></script>

<template>
  <div class="terminal text-8xl font-Roboto">
    <div class="screen">
      <p class="line1">Breno </p>
      <p class="line2">Baldassim </p>
      <p class="line3">FullStack</p>
      <p class="line4">Developer<span class="cursor text-8xl">_</span></p>
    </div>
  </div>
</template>

<style>
.screen {
  margin: 0;
}

.screen p {
  font-family: 'Intro';
}

p {
  position: relative;
  text-align: left;
  font-size: 1.25em;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

span {
  color: #fff;
  font-weight: bold;
}

.line1 {
  color: var(--app-color-light);
  animation: type 0.5s 0.5s steps(20, end) forwards;
}

.line2 {
  color: var(--app-color-light);
  animation: type 0.5s 1s steps(20, end) forwards;
}
.line3 {
  color: #fff;
  animation: type 0.5s 1.5s steps(20, end) forwards;
}
.line4 {
  color: #fff;
  animation: type 0.5s 2s steps(20, end) forwards;
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
  to {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .line1, .line2, .line3, .line4, .cursor{
      font-size: 50px;
      white-space: normal;
    }
}
</style>
