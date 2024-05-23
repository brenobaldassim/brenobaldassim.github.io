<script setup></script>

<template>
  <div class="terminal text-7xl font-Roboto">
    <div class="screen">
      <p class="line1">Breno Baldassim </p>
      <p class="line2">FullStack Web Developer<span class="cursor text-7xl">_</span></p>
      <p class="line3">teste</p>
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
  margin-top: 10px;
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
  animation: type 1s 0.5s steps(20, end) forwards;
}

.line2 {
  color: #fff;
  animation: type 1s 1s steps(20, end) forwards;
}

.cursor {
  animation: blink 1s 1.75s infinite;
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
</style>
