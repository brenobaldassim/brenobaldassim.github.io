<script setup></script>

<template>
  <div class="terminal text-2xl font-Roboto">
    <div class="screen">
      <p class="line1">>&nbsp; Breno Baldassim</p>
      <p class="line2">>&nbsp; FullStack Web Developer<span class="cursor">_</span></p>
      <p class="line3">teste</p>
    </div>
  </div>
</template>

<style>
.screen {
  margin: 0;
  padding: 16px 16px 0px 16px;
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
  color: #9fcc2e;
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
    width: 25em;
  }
}
</style>
