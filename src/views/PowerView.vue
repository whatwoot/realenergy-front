<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useStatsStore } from '@/stores/stats'
import { formatNumberAbbr } from '@/utils/util'

const statsStore = useStatsStore()

onMounted(() => {
  statsStore.loadStats()
})
</script>

<template>
  <div class="flex flex-col w-full bg-violet-50">
    <div class="w-full h-13 bg-white flex justify-between items-center pb-2 pt-2 fixed top-0 left-0 right-0 z-50">
      <div class="flex flex-row items-center">
        <div class="w-5 h-8 ml-4">
          <img src="@/assets/logo_1.png" class="w-5 h-8 object-contain" />
        </div>
        <div class="ml-4">
          <div
            class="justify-start items-center text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5"
          >
            RealFlow Power
          </div>
        </div>
      </div>
      <div class="h-13 flex items-center">
        <RouterLink to="/docs" class="flex items-center h-full">
        <div class="w-6 h-6 mr-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5047 6.20154H4.50708C3.68208 6.20154 3.00708 5.52654 3.00708 4.70154C3.00708 3.87654 3.68208 3.20154 4.50708 3.20154H19.5024C20.3274 3.20154 21.0024 3.87654 21.0024 4.70154C21.0047 5.52654 20.3297 6.20154 19.5047 6.20154ZM19.5047 13.5445H4.59614C3.77114 13.5445 3.09614 12.8695 3.09614 12.0445C3.09614 11.2195 3.77114 10.5445 4.59614 10.5445H19.5047C20.3297 10.5445 21.0047 11.2195 21.0047 12.0445C21.0047 12.8695 20.3297 13.5445 19.5047 13.5445ZM19.5047 21.0211H4.50708C3.68208 21.0211 3.00708 20.3461 3.00708 19.5211C3.00708 18.6961 3.68208 18.0211 4.50708 18.0211H19.5024C20.3274 18.0211 21.0024 18.6961 21.0024 19.5211C21.0047 20.3461 20.3297 21.0211 19.5047 21.0211Z"
              fill="#333333"
            />
          </svg>
        </div>
        </RouterLink>
      </div>
    </div>

    <!-- 内容区 -->
    <div class="w-full flex flex-col items-center mt-12">
      <div class="flex flex-col items-center pt-8">
        <div class="justify-start mb-7">
          <span class="text-black text-3xl font-semibold font-['PingFang_SC']">波场能量 </span
          ><span class="text-blue-600 text-3xl font-semibold font-['PingFang_SC']">极速租赁</span>
        </div>
        <div
          class="w-72 text-center justify-start text-stone-500 text-sm font-semibold font-['PingFang_SC'] mb-2"
        >
          降低 80% 转账手续费，全自动发货，安全、稳定、高效。
        </div>
        <div
          class="w-72 text-center justify-start text-stone-500 text-sm font-semibold font-['PingFang_SC'] mb-2"
        >
          开启RealFlow Power ，随时随地管理您的 Web3 资产。
        </div>
        <RouterLink to="/buypower">
          <div class="w-80 h-12 bg-blue-600 rounded-2xl mb-2 flex items-center justify-center">
            <div
              class="text-center justify-start text-white text-sm font-semibold font-['PingFang_SC']"
            >
              开始使用
            </div>
          </div>
        </RouterLink>
      </div>

      <div class="w-full">
        <div class="h-32 bg-white rounded-3xl flex flex-col items-center m-4">
          <div class="text-center justify-start my-4">
            <span class="text-black text-xl font-bold font-['Alibaba_PuHuiTi_2.0']">平台</span
            ><span class="text-blue-600 text-xl font-bold font-['Alibaba_PuHuiTi_2.0']">规模</span>
          </div>
          <div class="flex mx-1 w-full my-2">
            <div class="flex-1">
              <div
                class="text-center justify-start text-black text-2xl font-bold font-['Alibaba_PuHuiTi_2.0'] leading-6"
              >
                {{ formatNumberAbbr(statsStore.transactionVolume) }}
              </div>
              <div
                class="text-center justify-start text-neutral-400 text-xs font-bold font-['Alibaba_PuHuiTi_2.0']"
              >
                交易量
              </div>
            </div>
            <div class="flex-1">
              <div class="text-center justify-start text-black text-2xl font-bold font-['Alibaba_PuHuiTi_2.0'] leading-6">
                {{ formatNumberAbbr(statsStore.energyPoolSize) }}
              </div>
              <div
                class="text-center justify-start text-neutral-400 text-xs font-bold font-['Alibaba_PuHuiTi_2.0']"
              >
                能量池规模
              </div>
            </div>
            <div class="flex-1">
              <div
                class="text-center justify-start text-black text-2xl font-bold font-['Alibaba_PuHuiTi_2.0'] leading-6"
              >
                {{ formatNumberAbbr(statsStore.userCount) }}
              </div>
              <div
                class="text-center justify-start text-neutral-400 text-xs font-bold font-['Alibaba_PuHuiTi_2.0']"
              >
                服务用户数
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="bg-white rounded-3xl p-4 flex flex-col items-center m-4">
          <div class="text-center justify-start mb-4">
            <span class="text-black text-xl font-bold font-['Alibaba_PuHuiTi_2.0']">为什么选择</span
            ><span class="text-blue-600 text-xl font-bold font-['Alibaba_PuHuiTi_2.0']"
          >RealFlow Power
            </span>
          </div>

          <div class="w-80 h-24 bg-violet-50 rounded-2xl my-1 flex items-center">
            <img src="@/assets/why1.svg" alt="价格优惠" class="w-14 h-14 icon-zoom" />
            <div class="flex-1">
              <div class="text-black text-base font-bold font-['Alibaba_PuHuiTi_2.0'] mb-1">
                降低80%波场手续费
              </div>
              <div
                class="w-64 justify-start text-stone-500 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                享受市场最优能量租赁价格，为您波场交易降低成本。
              </div>
            </div>
          </div>

          <div class="w-80 h-24 bg-violet-50 rounded-2xl my-1 flex items-center">
            <img src="@/assets/why1.svg" alt="极速到账" class="w-14 h-14 icon-zoom" />
            <div class="flex-1">
              <div class="text-black text-base font-bold font-['Alibaba_PuHuiTi_2.0'] mb-1">
                极速到账
              </div>
              <div
                class="w-64 justify-start text-stone-500 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                支付成功后3秒内能量自动到账，无需等待。
              </div>
            </div>
          </div>

          <div class="w-80 h-24 bg-violet-50 rounded-2xl my-1 flex items-center">
            <img src="@/assets/why1.svg" alt="安全可靠" class="w-14 h-14 icon-zoom" />
            <div class="flex-1">
              <div class="text-black text-base font-bold font-['Alibaba_PuHuiTi_2.0'] mb-1">
                安全可靠
              </div>
              <div
                class="w-64 justify-start text-stone-500 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                智能合约自动执行，资金安全有保障。
              </div>
            </div>
          </div>

          <div class="w-80 h-24 bg-violet-50 rounded-2xl my-1 flex items-center">
            <img src="@/assets/why1.svg" alt="24/7支持" class="w-14 h-14 icon-zoom" />
            <div class="flex-1">
              <div class="text-black text-base font-bold font-['Alibaba_PuHuiTi_2.0'] mb-1">
                24/7支持
              </div>
              <div
                class="w-64 justify-start text-stone-500 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                全天候自动化服务，随时随地满足您的需求。
              </div>
            </div>
          </div>
          <div class="h-4"></div>
        </div>
      </div>

      <div class="w-full">
        <div class="bg-white rounded-3xl p-4 flex flex-col items-center m-4">
          <div class="mb-4">
            <div class="text-center justify-start mb-4">
              <span class="text-black text-xl font-bold font-['Alibaba_PuHuiTi_2.0']"
              >Tron 能量租赁</span
              ><span class="text-blue-600 text-xl font-bold font-['Alibaba_PuHuiTi_2.0']"
            >操作指南</span
            >
            </div>
            <div
              class="w-80 text-center justify-start text-neutral-400 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
            >
              Tron 能量/带宽租赁流程标准清晰，操作简单、结果可预期，新用户也能轻松上手
            </div>
          </div>
          <div class="flex">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 items-center">
                <img src="@/assets/zhinan_1.png" class="w-10 h-10 object-contain" />
              </div>
              <div class="w-4 h-18 items-center mt-2">
                <img src="@/assets/arraw_1.png" class="w-4 h-18 object-contain" />
              </div>
            </div>
            <div class="flex-1 pl-2 wl-4">
              <div
                class="justify-start text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5 py-2"
              >
                提交TRON钱包地址
              </div>
              <div
                class="w-72 justify-start text-neutral-400 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                用户仅需提交需要使用能量的 TRON
                钱包地址。平台不要求提供私钥或进行任何资产授权，钱包地址的控制权始终归用户所有
              </div>
            </div>
          </div>

          <div class="flex mt-1">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 items-center">
                <img src="@/assets/zhinan_2.png" class="w-10 h-10 object-contain" />
              </div>
              <div class="w-4 h-18 items-center mt-2">
                <img src="@/assets/arraw_1.png" class="w-4 h-18 object-contain" />
              </div>
            </div>
            <div class="flex-1 pl-2 wl-4">
              <div
                class="justify-start text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5 py-2"
              >
                系统分配Tron能量
              </div>
              <div
                class="w-72 justify-start text-neutral-400 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                在确认租赁规格后，系统将根据订单内容，通过 TRON 网络的原生资源代理机制自动完成 Tron
                能量分配，全程无需人工干预。
              </div>
            </div>
          </div>

          <div class="flex mt-1">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 items-center">
                <img src="@/assets/zhinan_3.png" alt="24/7支持" class="w-10 h-10 object-contain" />
              </div>
              <div class="w-4 h-18 items-center mt-2">
                <img src="@/assets/arraw_1.png" class="w-4 h-18 object-contain" />
              </div>
            </div>
            <div class="flex-1 pl-2 wl-4">
              <div
                class="justify-start text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5 py-2"
              >
                能量即时到账并生效
              </div>
              <div
                class="w-72 justify-start text-neutral-400 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                能量代理完成后，通常将在短时间内到账并生效。用户可立即进行 TRC20 USDT
                转账、交易所提现或合约调用等链上操作。
              </div>
            </div>
          </div>

          <div class="flex">
            <div class="flex flex-col my-2 justify-start">
              <div class="w-10 h-10 items-center">
                <img src="@/assets/zhinan_4.png" class="w-10 h-10 object-contain" />
              </div>
            </div>
            <div class="flex-1 pl-2 wl-4">
              <div
                class="justify-start text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5  pt-4"
              >
                到期自动回收
              </div>
              <div
                class="w-72 justify-start text-neutral-400 text-xs font-normal font-['Alibaba_PuHuiTi_2.0']"
              >
                能量代理完成后，通常将在短时间内到账并生效。用户可立即进行 TRC20 USDT
                转账、交易所提现或合约调用等链上操作。
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="flex flex-row mx-8 mt-6 mb-2 items-center">
          <div class="w-5 h-8">
            <!--            <img src="@/assets/zhinan_4.png" class="w-10 h-10 object-contain" />-->
            <img
              src="@/assets/logo_1.png"
              class="w-5 h-8 object-contain"
              style="border-color: #0ee0f9"
            />
          </div>
          <div
            class="justify-start text-black text-lg font-bold font-['Alibaba_PuHuiTi_2.0'] leading-5 ml-2"
          >
            RealFlow Power
          </div>
        </div>
        <div class="mx-8 justify-start text-stone-500 text-sm font-normal font-['PingFang_SC']">
          最专业的波场能量交易平台，为您的每一笔转账保驾护航。安全、低价、高效。
        </div>

        <div class="mx-8 mt-6 justify-start text-zinc-800 text-sm font-medium font-['PingFang_SC']">
          快速链接
        </div>
        <div
          class="mx-8 mt-2 justify-start text-neutral-400 text-xs font-normal font-['PingFang_SC'] leading-5"
        >
          <RouterLink to="/buypower">租赁能量</RouterLink><br />出售能量<br /><RouterLink to="/docs">使用教程</RouterLink>
        </div>

        <div class="mx-8 mt-6 justify-start text-zinc-800 text-sm font-medium font-['PingFang_SC']">
          联系我们
        </div>
        <div class="flex flex-row mx-8 mt-2 justify-start">
          <div>
            <img src="@/assets/x.png" class="w-6 h-6 object-contain" />
          </div>
          <div class="ml-1">
            <img src="@/assets/t.png" class="w-6 h-6 object-contain" />
          </div>
        </div>
        <div class="h-8"></div>
      </div>
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.icon-zoom {
  object-fit: contain;
  transform: scale(1.8);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
