<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
          </thead>
          <Loader v-if="loading" />
          <tbody v-else>
            <tr>
              <td>USD</td>
              <td>{{ resCurrencyUSD }}</td>
              <td>{{ date | date('date') }}</td>
            </tr>
            <tr>
              <td>EUR</td>
              <td>{{ resCurrencyEUR }}</td>
              <td>{{ date | date('date') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Loader from './app/Loader.vue';
  export default {
    components: { Loader },
    props: ['rates', 'date'],
    data: () => ({
      currencies: ['RUB', 'USD', 'EUR'],
      currencyUSD: null,
      currencyEUR: null,
      resCurrencyUSD: null,
      resCurrencyEUR: null,
      loading: true,
    }),
    async mounted() {
      this.currencyUSD = await this.$store.dispatch('fetchCurrencyUSD');
      this.currencyEUR = await this.$store.dispatch('fetchCurrencyEUR');
      this.resCurrencyUSD = this.currencyUSD.result.toFixed(2);
      this.resCurrencyEUR = this.currencyEUR.result.toFixed(2);
      this.loading = false;
    },
  };
</script>
