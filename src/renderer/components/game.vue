<template>
    <div id="wrapper" class="wrapper row align-center">
        <main>
            <header class="row justify-between">
                <div class="col-8 row is-columns">
                    <div class="row justify-end">
                        <figure class="">
                            <img :class="{disabled: helps.public}" @click="public"
                                 src="~@/assets/images/iconayudapublico.png" alt="">
                        </figure>
                    </div>
                    <div class="row justify-center">
                        <figure>
                            <img :class="{disabled: helps.call}" @click="call"
                                 src="~@/assets/images/iconllamada.png" alt="">
                        </figure>
                    </div>
                    <div>
                        <figure>
                            <img :class="{disabled: helps[50]}" @click="fifty"
                                 src="~@/assets/images/icon5050.png" alt="">
                        </figure>
                    </div>
                </div>
                <div class="col-8 row justify-end">
                    <section class="Table ">
                        <ul class="is-list-less">
                            <li :class="{bold: classObject(15)}"><b>15</b>-15.000 PUNTOS</li>
                            <li :class="{bold: classObject(14)}"><b>14</b>-13.500 PUNTOS</li>
                            <li :class="{bold: classObject(13)}"><b>13</b>-12.200 PUNTOS</li>
                            <li :class="{bold: classObject(12)}"><b>12</b>-11.600 PUNTOS</li>
                            <li :class="{bold: classObject(11)}"><b>11</b>-10.800 PUNTOS</li>
                            <li :class="{bold: classObject(10)}" class="--red"><b>10</b>-10.000 PUNTOS</li>
                            <li :class="{bold: classObject(9)}"><b>9</b>-9.600 PUNTOS</li>
                            <li :class="{bold: classObject(8)}"><b>8</b>-8.500 PUNTOS</li>
                            <li :class="{bold: classObject(7)}"><b>7</b>-7.900 PUNTOS</li>
                            <li :class="{bold: classObject(6)}"><b>6</b>-6.400 PUNTOS</li>
                            <li :class="{bold: classObject(5)}" class="--red"><b>5</b>-5.000 PUNTOS</li>
                            <li :class="{bold: classObject(4)}"><b>4</b>-4.700 PUNTOS</li>
                            <li :class="{bold: classObject(3)}"><b>3</b>-3.900 PUNTOS</li>
                            <li :class="{bold: classObject(2)}"><b>2</b>-1.800 PUNTOS</li>
                            <li :class="{bold: classObject(1)}"><b>1</b>-900 PUNTOS</li>
                        </ul>
                    </section>
                </div>
            </header>
            <footer>
                <div class="Question">
                    <figure>
                        <img src="~@/assets/images/btnpregunta.png" alt="">
                        <div class="Question-content row align-center justify-center">
                            <span>{{ questionNew.question }}</span>
                        </div>
                    </figure>
                </div>
                <div class="row Answers">
                    <div class="col-8">
                        <figure @click="show(questionNew.answers[orderAns[0]].correct)">
                            <img src="~@/assets/images/btnrespuestader.png" alt="">
                            <div class="Answers-content row align-center justify-center">
                                <span v-show="answersShow['1']['1']">
                                    A: {{ questionNew.answers[orderAns[0]].content }}
                                </span>
                            </div>
                        </figure>
                        <figure @click="show(questionNew.answers[orderAns[1]].correct)">
                            <img src="~@/assets/images/btnrespuestader.png" alt="">
                            <div class="Answers-content row align-center justify-center">
                                <span v-show="answersShow['2']['1']">
                                    B: {{ questionNew.answers[orderAns[1]].content }}
                                </span>
                            </div>
                        </figure>
                    </div>

                    <div class="col-8">
                        <figure @click="show(questionNew.answers[orderAns[2]].correct)">
                            <img src="~@/assets/images/btnrespuestaizq.png" alt="">
                            <div class="Answers-content-der row align-center justify-center">
                                <span v-show="answersShow['3']['1']">
                                    C: {{ questionNew.answers[orderAns[2]].content }}
                                </span>
                            </div>
                        </figure>
                        <figure @click="show(questionNew.answers[orderAns[3]].correct)">
                            <img src="~@/assets/images/btnrespuestaizq.png" alt="">
                            <div class="Answers-content-der row align-center justify-center">
                                <span v-show="answersShow['4']['1']">
                                    D: {{ questionNew.answers[orderAns[3]].content }}
                                </span>
                            </div>
                        </figure>
                    </div>
                </div>
            </footer>
        </main>
        <div v-show="helpsShow.public" class="modal row justify-center align-center">
            <div class="close" @click="helpsShow.public = false">
                X
            </div>
            <figure>
                <img src="@/assets/images/imgayudapublico.png" alt="">
                <ul class="is-list-less answers-public row">
                    <li :class="{correct: correctPublic(1)}">
                        <div class="bar"></div>
                        <span>a</span>
                    </li>
                    <li :class="{correct: correctPublic(2)}">
                        <div class="bar"></div>
                        <span>b</span>
                    </li>
                    <li :class="{correct: correctPublic(3)}">
                        <div class="bar"></div>
                        <span>c</span>
                    </li>
                    <li :class="{correct: correctPublic(4)}">
                        <div class="bar"></div>
                        <span>d</span>
                    </li>
                </ul>
            </figure>
        </div>
        <div v-show="helpsShow.call" class="modal row justify-center align-center">
            <div class="close" @click="helpsShow.call = false">
                X
            </div>
            <figure>
                <img src="@/assets/images/imgllamadaamigo.png" alt="">
                <p>{{callFriend}}</p>
            </figure>
        </div>
        <audio id="correct">
            <source src="@/assets/audio/correcto.mp3" type="audio/mpeg">
        </audio>
    </div>

</template>

<script>
  import DB from '@/services/questions'

  export default {
    data () {
      return {
        callFriend: '',
        questionCurrent: 1,
        level: 'easy',
        levelCurrent: 0,
        questionCurrentTotal: 1,
        question: {},
        order: [],
        orderAns: [],
        helps: {
          50: false,
          'call': false,
          'public': false
        },
        helpsShow: {
          50: false,
          'call': false,
          'public': false
        },
        answersShow: {
          1: {1: true, 2: ''},
          2: {1: true, 2: ''},
          3: {1: true, 2: ''},
          4: {1: true, 2: ''}
        },
        normalizeNumber: {
          1: 'a',
          2: 'b',
          3: 'c',
          4: 'd'
        }
      }
    },
    computed: {
      questionNew () {
        return this.question
      }
    },
    created () {
      let i = 0
      let j = 0
      while (j < 4) {
        let numberRand = Math.floor((Math.random() * 4) + 1)
        if (!this.orderAns.includes(numberRand)) {
          this.orderAns.push(numberRand)
          j++
        }
      }
      while (i < 5) {
        let numberRand = Math.floor((Math.random() * 33) + 1)
        if (!this.order.includes(numberRand)) {
          this.order.push(numberRand)
          i++
        }
      }
      this.question = DB[this.level][this.order[0]]

      this.answersShow[1][2] = this.questionNew.answers[this.orderAns[0]].correct
      this.answersShow[2][2] = this.questionNew.answers[this.orderAns[1]].correct
      this.answersShow[3][2] = this.questionNew.answers[this.orderAns[2]].correct
      this.answersShow[4][2] = this.questionNew.answers[this.orderAns[3]].correct
    },
    methods: {
      show (correct) {
        if (!correct) {
          this.$router.push({name: 'errorgame'})
        }
        document.getElementById('correct').play()
        this.question = DB[this.level][this.order[this.questionCurrent]]
        this.questionCurrentTotal++
        if (this.questionCurrent === 4) {
          this.questionCurrent = 0
          if (this.levelCurrent === 0) {
            this.level = 'medium'
            this.levelCurrent++
          } else {
            this.level = 'hard'
          }
          return
        }
        this.questionCurrent++
        Object.keys(this.answersShow).forEach(key => {
          this.answersShow[key][1] = true
        })
      },
      classObject: function (s) {
        return this.questionCurrentTotal === s
      },
      correctPublic: function (s) {
        return this.answersShow[s][2]
      },
      public () {
        if (!this.helps.public) {
          this.helps.public = true
          this.helpsShow.public = true
        }
      },
      call () {
        if (!this.helps.call) {
          this.helps.call = true
          this.helpsShow.call = true
          Object.keys(this.answersShow).forEach(key => {
            if (this.answersShow[key][2]) {
              this.callFriend = this.normalizeNumber[key]
            }
          })
        }
      },
      fifty () {
        if (!this.helps[50]) {
          let count = 0
          this.helps[50] = true
          this.helpsShow[50] = true

          Object.keys(this.answersShow).forEach(key => {
            if (!this.answersShow[key][2] && count < 2) {
              this.answersShow[key][1] = false
              count++
            }
          })
        }
      }
    }
  }
</script>
<style scoped="" lang="scss">
    main {
        margin: auto;
    }

    .wrapper {
        height: 100vh;
    }

    header {
        margin: 0 auto;
        padding: 2rem;
        max-width: 100rem;
        figure {
            max-width: 17rem;
            margin: 1rem;
        }
    }

    .Table {
        padding: 1rem 2rem;
        border: .1rem solid gray;
        border-radius: .3rem;
        background: rgba(255, 255, 255, 0.8);
        font-size: 1.3rem;
        width: 20rem;
        text-align: center;
    }

    footer {
        max-width: 100rem;
        margin: auto;
        text-align: center;
        figure {
        }
    }

    .is-columns {

        padding-right: 8rem;

        div:nth-child(odd) {
            padding-left: 0 !important;
        }

        div:nth-child(even) {
            padding-right: 0 !important;
        }
    }

    .--red {
        color: red;
    }

    .Question {
        position: relative;
        .Question-content {
            position: absolute;
            color: white;
            top: 1.8rem;
            left: 28rem;
            width: 43.5rem;
            height: 7.5rem;
            font-size: 1.6rem;
            line-height: 1.2em;
            padding: 0 2rem;
            margin: auto;
        }
    }

    .Answers {
        figure {
            margin: 2rem 0;
            position: relative;
        }
    }

    .Answers-content {
        position: absolute;
        color: white;
        top: 1.5rem;
        left: 6.4rem;
        width: 30.5rem;
        height: 5.5rem;
        font-size: 1.4rem;
        line-height: 1.1em;
        padding: 0 2rem;
    }

    .Answers-content-der {
        position: absolute;
        color: white;
        top: 1.5rem;
        left: 13.4rem;
        width: 30.5rem;
        height: 5.5rem;
        font-size: 1.4rem;
        line-height: 1.1em;
        padding: 0 2rem;
    }

    .bold {
        font-weight: 900;
        color: green;
    }

    .disabled {
        opacity: .2;
    }

    .modal {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        .close {
            position: absolute;
            top: 3rem;
            right: 3rem;
            font-weight: 600;
            font-size: 6rem;
            color: white;
            cursor: pointer;
        }
        figure {
            width: 80rem;
            position: relative;
        }
        ul {
            position: absolute;
            z-index: 100;
            top: 17rem;
            left: 21rem;
            color: white;
            font-size: 3.5rem;
        }
        li {
            margin: 0 2rem;
            &.correct {
                position: relative;
                top: -6.9rem;
                .bar {
                    height: 10rem;
                }
            }
        }
        .bar {
            width: 3rem;
            height: 3rem;
            background: green;
        }
        p {
            position: absolute;
            z-index: 100;
            top: 14rem;
            left: 46.5rem;
            font-size: 5rem;
            color: white;
            font-weight: 800;
        }
    }
</style>
