<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
// import { AwesomeQR } from 'awesome-qr'
import QRCode from 'qrcode'
import { useStatsStore } from '@/stores/stats'

const statsStore = useStatsStore()
const qrCodeUrl = ref('')

onMounted(async () => {
  await statsStore.loadStats()

  // 生成二维码
  if (statsStore.depositAddress) {
    qrCodeUrl.value = await QRCode.toDataURL(statsStore.depositAddress, {
      width: 320,
      margin: 1,
    })
  }
})

const ENERGY_EXPEND = 64000
const avaliableEnergy = ref(1956351456)

const count = ref(1)
const amount = ref(3)
const energy = ref(ENERGY_EXPEND)

const decrease = () => {
  if (count.value > 1) {
    count.value--
    amount.value = count.value * 3
    energy.value = count.value * ENERGY_EXPEND
  }
}

const increase = () => {
  if(count.value < 30){
    count.value++
    amount.value = count.value * 3
    energy.value = count.value * ENERGY_EXPEND
  }
}

const buynums = (num: number) => {
  count.value = num
  amount.value = count.value * 3
  energy.value = count.value * ENERGY_EXPEND
}

const showCopySuccess = ref(false)

const copyAddress = async () => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(statsStore.depositAddress)
    } else {
      // Fallback for older browsers or non-secure contexts
      const textarea = document.createElement('textarea')
      textarea.value = statsStore.depositAddress
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    showCopySuccess.value = true
    setTimeout(() => {
      showCopySuccess.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}


const router = useRouter()

const goBack = () => {
  router.back()
}


</script>
<template>
  <div class="w-full h-[1451px] relative bg-slate-50 overflow-hidden">
    <div class="w-full h-13 flex justify-center items-center border-b border-gray-200 pb-2 pt-2">
      <div class="w-6 h-6 flex-none absolute left-4 cursor-pointer" @click="goBack">
        <img src="@/assets/left_arraw.png" class="w-6 h-6 object-contain" />
      </div>
      <div class="justify-start text-black text-base font-medium font-['PingFang_SC']">
        能量购买
      </div>
    </div>

    <div class="w-full">
      <div class="m-4 h-[463px] bg-white rounded-2xl py-4 pl-4">
        <div class="justify-start text-blue-600 text-base font-medium font-['PingFang_SC']">
          转账购买
        </div>
        <div class="ml-3 w-10 h-0 border-t-4 border-blue-600"></div>
        <div class="flex mt-4 items-center space-x-1">
          <div>
            <div class="w-4 h-4 bg-blue-600 rounded-full flex justify-center items-center">
              <div class="text-white text-[9.29px] font-medium font-['PingFang_SC']">1</div>
            </div>
          </div>
          <div
            class="justify-start items-center text-zinc-800 text-xs font-medium font-['PingFang_SC'] leading-3"
          >
            设置转账笔数
          </div>
<!--          <div class="justify-end items-center">-->
<!--            <span class="text-slate-500 text-xs font-normal font-['PingFang_SC']"-->
<!--              >如果接收地址没有USDT，请选择</span-->
<!--            ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC'] pl-1">2笔</span>-->
<!--          </div>-->
        </div>

        <div class="flex mt-2 items-center">
          <div class="flex w-52 h-11 bg-gray-100 rounded-[10px] items-center px-3">
            <div class="w-6 h-6 flex justify-center items-center cursor-pointer" @click="decrease">
              <img class="w-6 h-6" src="@/assets/sub.png" />
            </div>
            <div class="flex flex-1 justify-center items-center">
              <div
                class="justify-start text-black text-base font-medium font-['PingFang_SC'] leading-3"
              >
                {{ count }}
              </div>
            </div>

            <div class="w-6 h-6 flex justify-center items-center cursor-pointer" @click="increase">
              <img class="w-6 h-6" src="@/assets/plus.png" />
            </div>
          </div>
          <div
            class="ml-4 flex items-center justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-5"
          >
            <span>≈</span>
            <span class="w-5 text-center">{{ count }}</span>
            <span>次 USDT 转账</span>
          </div>
        </div>
        <div class="flex justify-between pr-4 mt-2">
          <div
            class="flex items-center justify-center w-14 h-6 bg-white rounded-2xl border border-neutral-300 cursor-pointer"
            @click="buynums(1)"
          >
            <div
              class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-3"
            >
              1笔
            </div>
          </div>
          <div
            class="flex items-center justify-center w-14 h-6 bg-white rounded-2xl border border-neutral-300 cursor-pointer"
            @click="buynums(2)"
          >
            <div
              class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-3"
            >
              2笔
            </div>
          </div>
          <div
            class="flex items-center justify-center w-14 h-6 bg-white rounded-2xl border border-neutral-300 cursor-pointer"
            @click="buynums(10)"
          >
            <div
              class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-3"
            >
              10笔
            </div>
          </div>
          <div
            class="flex items-center justify-center w-14 h-6 bg-white rounded-2xl border border-neutral-300 cursor-pointer"
            @click="buynums(20)"
          >
            <div
              class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-3"
            >
              20笔
            </div>
          </div>
          <div
            class="flex items-center justify-center w-14 h-6 bg-white rounded-2xl border border-neutral-300 cursor-pointer"
            @click="buynums(30)"
          >
            <div
              class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-3"
            >
              30笔
            </div>
          </div>
        </div>

        <div class="flex mt-4 items-center space-x-1">
          <div>
            <div class="w-4 h-4 bg-blue-600 rounded-full flex justify-center items-center">
              <div class="text-white text-[9.29px] font-medium font-['PingFang_SC']">2</div>
            </div>
          </div>
          <div class="flex justify-start items-center">
            <span class="text-zinc-800 text-xs font-medium font-['PingFang_SC'] leading-3"
              >向下面地址转账
            </span>
            <span class="w-5  text-center text-blue-600 text-xs font-medium font-['PingFang_SC'] leading-3 pl-1">{{ amount }}</span>
            <span class="text-blue-600 text-xs font-medium font-['PingFang_SC'] leading-3 pl-1">TRX</span>
          </div>
        </div>
        <div class="flex mt-4 items-center">
          <div
            class="flex w-24 h-24 items-center justify-center bg-white rounded-xl shadow-[0px_4.595744609832764px_18.382978439331055px_0px_rgba(0,0,0,0.15)]"
          >
<!--            <div><img class="w-20 h-20 rounded-[5.11px]" src="@/assets/crcode2.png" /></div>-->
            <div><img class="w-20 h-20 rounded-[5.11px]" :src="qrCodeUrl" v-if="qrCodeUrl" /></div>
          </div>
          <div class="flex flex-col ml-4 h-24">
            <div
              class="flex-1 mt-4 w-52 justify-start text-black text-xs font-medium font-['PingFang_SC'] leading-4 break-words"
            >
              {{ statsStore.depositAddress }}
            </div>
            <div class="flex justify-end items-end cursor-pointer" @click="copyAddress">
              <div class="w-24 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <div class="justify-start text-white text-xs font-medium font-['PingFang_SC'] leading-4">
                  复制地址
                </div>
                <div class="w-4 h-4 relative overflow-hidden ml-1 pb-2">
                  <img src="@/assets/copy.png" class="w-4 h-4 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 w-80 flex flex-wrap justify-start items-center">
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">转账成功后，可获得 </span>
          <span class="w-20 text-center font-mono text-blue-600 text-xs font-medium font-['PingFang_SC']">{{ energy.toLocaleString() }} </span>
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">能量，可用于 </span>
          <span class="w-5 text-center font-mono text-slate-500 text-xs font-medium font-['PingFang_SC']">{{ count }}</span>
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">次</span>
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']"> USDT 转账节省 </span>
        <span class="text-blue-600 text-xs font-medium font-['PingFang_SC']">80%</span
          ><span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">
            手续费！ 请在 </span
          ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC']">15分 </span
          ><span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">钟内使用。</span>
        </div>

        <div class="mt-4 w-80 justify-start">
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']"
            >如需为其他地址购买能力，请在转账备注中输入地址。点击</span
          ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC']"><RouterLink to="/example">查看示例</RouterLink></span
          ><span class="text-slate-500 text-xs font-medium font-['PingFang_SC']"
            >。 请确认接收能量地址已经被</span
          ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC']">激活</span
          ><span class="text-slate-500 text-xs font-medium font-['PingFang_SC']"
            >，否则不能接受能量。</span
          >
        </div>
      </div>
    </div>

    <!--购买指南-->
    <div class="w-full">
      <div class="m-4 h-96 bg-white rounded-2xl py-4 pl-4">
        <div class="flex items-center space-x-2">
          <div class="w-5 h-5 flex justify-center items-center">
            <img src="@/assets/buycar.png" class="w-5 h-5 object-contain" />
          </div>
          <div class="justify-start text-slate-500 text-xs font-normal font-['PingFang_SC']">
            可购买能量池
          </div>
          <div class="justify-start text-blue-600 text-sm font-semibold font-['PingFang_SC']">
            {{ statsStore.availableEnergy.toLocaleString() }}
          </div>
          <div class="justify-start text-slate-500 text-xs font-normal font-['PingFang_SC']">
            能量
          </div>
        </div>

        <div class="flex items-center mt-4">
          <div class="text-blue-600 text-sm font-medium font-['PingFang_SC'] leading-4">
            购买指南
          </div>
          <div class="w-3 h-3 relative ml-1">
            <img src="@/assets/buy_left_arraw.png" class="w-3 h-3 object-contain" />
          </div>
        </div>

        <div class="flex flex-col w-80 h-72 bg-sky-50 rounded-md mt-4">
          <div class="flex justify-between w-full px-4 py-2">
            <div class="flex-col justify-start flex-1 h-16">
              <div class="flex items-end h-1/2">
                <div class="justify-start pb-1">
                  <span class="text-black text-sm font-medium font-['PingFang_SC'] leading-4"
                    >租赁</span
                  >
                  <span class="text-blue-600 text-base font-semibold font-['PingFang_SC'] leading-4"
                    >65,000</span
                  >
                  <span class="text-black text-sm font-medium font-['PingFang_SC'] leading-4"
                    >能量的价格</span
                  >
                </div>
              </div>
              <div class="flex items-start pt-1">
                <span class="text-slate-500 text-sm font-medium font-['PingFang_SC'] leading-4"
                  >≈</span
                >
                <span class="text-red-600 text-sm font-medium font-['PingFang_SC'] leading-4"
                  >1.</span
                >
                <span class="text-zinc-800 text-xs font-medium font-['PingFang_SC'] leading-4"
                  >95</span
                >
                <span
                  class="justify-start text-black text-xs font-normal font-['PingFang_SC'] leading-4"
                  >TRX/小时</span
                >
              </div>
            </div>
            <div calss="flex-none w-20 h-16 justify-end">
              <img class="w-20 h-16" src="@/assets/energy.png" />
            </div>
          </div>

          <div class="flex items-center ml-4">
            <div
              class="justify-start text-black text-xs font-medium font-['PingFang_SC'] leading-4"
            >
              对比其他能量获取途径
            </div>
            <!--            <div class="ml-2 w-40 border-t-2 border-dashed border-neutral-400" style="border-style: dashed;"></div>-->
            <div class="ml-2 w-40 h-0 border-t border-dashed border-neutral-400"></div>
          </div>
          <div class="flex items-center ml-4 mt-6">
            <div class="flex flex-row">
              <div class="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
                <img class="w-8 h-8" src="@/assets/shark_1.png" />
              </div>
              <div class="flex flex-col ml-2">
                <div
                  class="mt-3 justify-start text-black text-sm font-medium font-['PingFang_SC'] leading-3"
                >
                  获取 65,000 能量需质押
                </div>
                <div class="flex justify-start mt-3">
                  <span class="text-black text-sm font-medium font-['PingFang_SC'] leading-3"
                    >≈</span
                  >
                  <span
                    class="justify-start text-blue-600 text-base font-semibold font-['PingFang_SC'] leading-3"
                    >6,941</span
                  >
                  <span
                    class="justify-start text-slate-500 text-sm font-medium font-['PingFang_SC'] leading-3"
                    >.99</span
                  >
                  <span
                    class="justify-start text-slate-500 text-sm font-medium font-['PingFang_SC'] leading-3"
                    >TRX</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center ml-4 mt-6">
            <div class="flex flex-row">
              <div class="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl">
                <img class="w-8 h-8" src="@/assets/fire.png" />
              </div>
              <div class="flex flex-col ml-2">
                <div
                  class="mt-3 justify-start text-black text-sm font-medium font-['PingFang_SC'] leading-3"
                >
                  获取 65,000 能量需燃烧
                </div>
                <div class="flex justify-start mt-3">
                  <span class="text-black text-sm font-medium font-['PingFang_SC'] leading-3"
                    >≈</span
                  >
                  <span
                    class="justify-start text-blue-600 text-base font-semibold font-['PingFang_SC'] leading-3"
                    >6</span
                  >
                  <span
                    class="justify-start text-slate-500 text-sm font-medium font-['PingFang_SC'] leading-3"
                    >.5</span
                  >
                  <span
                    class="justify-start text-slate-500 text-sm font-medium font-['PingFang_SC'] leading-3"
                    >TRX</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 波场指南 -->
      <div class="flex flex-col m-4 h-52 bg-white rounded-2xl py-4 pl-4">
        <RouterLink to="/docs/what_is_tron_energy">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          什么是波场能量？怎么获得能量？<br />
        </div>
        </RouterLink>
        <RouterLink to="/docs/out_of_energy">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          如何解决"OUT OF ENERGY"错误？
        </div>
        </RouterLink>
        <RouterLink to="/docs/why_not_dex">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          为什么不能用中心化交易所的钱包购买能量？
        </div>
        </RouterLink>
        <RouterLink to="/docs/why_rentail_energy">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          如何租赁能量？
        </div>
        </RouterLink>
        <RouterLink to="/docs/why_transfer_failed">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          已经租赁了能量，为什么转账还是失败？
        </div>
        </RouterLink>
        <RouterLink to="/docs/how_much_energy">
        <div
          class="mb-2 w-60 h-4 justify-start text-slate-500 text-xs font-medium font-['PingFang_SC'] leading-4"
        >
          波场上转USDT需要多少能量？
        </div>
        </RouterLink>
        <RouterLink to="/docs">
        <div class="flex flex-row mb-2 items-center">
          <div class="justify-start text-blue-600 text-xs font-medium font-['PingFang_SC']">
            更多波场能量租赁知识
          </div>
          <div class="w-3 h-3 relative ml-1">
            <img src="@/assets/buy_left_arraw.png" class="w-3 h-3 object-contain" />
          </div>
        </div>
        </RouterLink>
      </div>

      <div class="flex flex-col m-4 h-52 bg-white rounded-2xl py-4 pl-4">
        <div class="flex flex-row items-center">
          <div class="w-8 h-8">
            <img src="@/assets/call.png" class="w-8 h-8 object-contain" />
          </div>
          <div class="ml-2 justify-start text-black text-xs font-medium font-['PingFang_SC']">
            7x24 小时全天候在线服务
          </div>
        </div>
        <div class="justify-start my-4">
          <span class="text-slate-500 text-xs font-medium font-['PingFang_SC']">官方唯一客服：</span
          ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC']">@RealFlow_trc20</span>
        </div>
        <div class="justify-start text-slate-500 text-xs font-normal font-['PingFang_SC']">
          realflowpower.com 提供7x24 全天候的技术支持，<br />确保任何问题都能在第一时间得到解决。<br />购买能量、能量租赁realflowpower.com
          为您提供专业的服务。
        </div>
        <div class="justify-start">
          <span class="text-slate-500 text-xs font-normal font-['PingFang_SC']"
            >如需使用TG机器人自助购买能量，请点击<br /></span
          ><span class="text-blue-600 text-xs font-medium font-['PingFang_SC']">@RealFlow_trc20</span>
        </div>
      </div>
    </div>

    <div v-if="showCopySuccess" class="fixed top-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg z-50">
      复制成功
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
