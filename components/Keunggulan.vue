<template>
  <div>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto mt-12">
      <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 xs:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg xs:rounded-3xl">
        <div class="max-w-md mx-auto">
          <div class="flex flex-wrap overflow-hidden mt-5 h-full justify-center">
            <div class="w-full overflow-hidden">
              <div class="text-center">
                <h1 class="text-teal-700">
                  <span class="font-extrabold text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">Keunggulan</span>
                  <span class="font-semibold text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">bimbim!</span>
                </h1>
              </div>
            </div>
            <div class="w-full overflow-hidden">
              <div class="max-w-2xl mx-auto">
                <div class="carousel-inner-k">
                  <input class="carousel-open-k" type="radio" id="carousel-1-k" name="carousel-k" aria-hidden="true" hidden="" checked="checked">
                  <div class="carousel-item-k">
                    <img class="mx-auto" data-src="https://dl.dropboxusercontent.com/s/wujooxde8wk5b1s/keung-1.png?dl=0" alt="" title="" v-lazy-load>
                  </div>
                  <input class="carousel-open-k" type="radio" id="carousel-2-k" name="carousel-k" aria-hidden="true" hidden="">
                  <div class="carousel-item-k">
                    <img data-src="https://dl.dropboxusercontent.com/s/rv5xxtmu3u89exa/keung-2.png?dl=0" alt="" title="" v-lazy-load>
                  </div>
                  <input class="carousel-open-k" type="radio" id="carousel-3-k" name="carousel-k" aria-hidden="true" hidden="">
                  <div class="carousel-item-k">
                    <img data-src="https://dl.dropboxusercontent.com/s/9jfv7zy1l08973e/keung-3.png?dl=0" alt="" title="" v-lazy-load>
                  </div>
                  <input class="carousel-open-k" type="radio" id="carousel-4-k" name="carousel-k" aria-hidden="true" hidden="">
                  <div class="carousel-item-k">
                    <img data-src="https://dl.dropboxusercontent.com/s/z73nnlg8u326mjj/keung-4.png?dl=0" alt="" title="" v-lazy-load>
                  </div>
                  <input class="carousel-open-k" type="radio" id="carousel-5-k" name="carousel-k" aria-hidden="true" hidden="">
                  <div class="carousel-item-k">
                    <img data-src="https://dl.dropboxusercontent.com/s/ssxh3im0mw5pjqp/keung-5.png?dl=0" alt="" title="" v-lazy-load>
                  </div>
                  <label for="carousel-5-k" class="carousel-control-k prev-k control-1-k">‹</label>
                  <label for="carousel-2-k" class="carousel-control-k next-k control-1-k">›</label>
                  <label for="carousel-1-k" class="carousel-control-k prev-k control-2-k">‹</label>
                  <label for="carousel-3-k" class="carousel-control-k next-k control-2-k">›</label>
                  <label for="carousel-2-k" class="carousel-control-k prev-k control-3-k">‹</label>
                  <label for="carousel-4-k" class="carousel-control-k next-k control-3-k">›</label>
                  <label for="carousel-3-k" class="carousel-control-k prev-k control-4-k">‹</label>
                  <label for="carousel-5-k" class="carousel-control-k next-k control-4-k">›</label>
                  <label for="carousel-4-k" class="carousel-control-k prev-k control-5-k">‹</label>
                  <label for="carousel-1-k" class="carousel-control-k next-k control-5-k">›</label>
                  <ol class="carousel-indicators-k">
                    <li>
                      <label for="carousel-1-k" class="carousel-bullet-k">•</label>
                    </li>
                    <li>
                      <label for="carousel-2-k" class="carousel-bullet-k">•</label>
                    </li>
                    <li>
                      <label for="carousel-3-k" class="carousel-bullet-k">•</label>
                    </li>
                    <li>
                      <label for="carousel-4-k" class="carousel-bullet-k">•</label>
                    </li>
                    <li>
                      <label for="carousel-5-k" class="carousel-bullet-k">•</label>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.carousel-inner-k {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-open-k:checked + .carousel-item-k {
    position: static;
    opacity: 100;
}

.carousel-item-k {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item-k img {
    display: block;
    height: auto;
    max-width: 100%;
}

.carousel-control-k {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.carousel-control-k.prev-k {
    left: 2%;
}

.carousel-control-k.next-k {
    right: 2%;
}

.carousel-control-k:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-1-k:checked ~ .control-1-k,
#carousel-2-k:checked ~ .control-2-k,
#carousel-3-k:checked ~ .control-3-k,
#carousel-4-k:checked ~ .control-4-k,
#carousel-5-k:checked ~ .control-5-k {
    display: block;
}

.carousel-indicators-k {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 0%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators-k li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet-k {
    color: rgb(119, 117, 117);
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet-k:hover {
    color: #464646;
}

#carousel-1-k:checked ~ .control-1-k ~ .carousel-indicators-k li:nth-child(1) .carousel-bullet-k,
#carousel-2-k:checked ~ .control-2-k ~ .carousel-indicators-k li:nth-child(2) .carousel-bullet-k,
#carousel-3-k:checked ~ .control-3-k ~ .carousel-indicators-k li:nth-child(3) .carousel-bullet-k,
#carousel-4-k:checked ~ .control-4-k ~ .carousel-indicators-k li:nth-child(4) .carousel-bullet-k,
#carousel-5-k:checked ~ .control-5-k ~ .carousel-indicators-k li:nth-child(5) .carousel-bullet-k {
    color: #11bac0;
}

#title-k {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}
</style>
