// FX converter class
export default class FX {

    constructor(LoadingFxStatus) {
        this.fixerServer = 'http://data.fixer.io/api/latest?access_key=ffcc344a3f31700c0020d166fd17ea96';
        this.RatesMap = new Map();
        this.LoadingFxStatus = LoadingFxStatus;

        fetch(this.fixerServer)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    this.fixerData = data;
                    this.refreshRatesValues();
                    this.LoadingFxStatus('OK');
                } else {
                    this.LoadingFxStatus('ERR');
                }
            });
    }

    // Set pairs values
    refreshRatesValues() {
        this.RatesMap.set('EURUSD', this.fixerData.rates.USD);
        this.RatesMap.set('EURARS', this.fixerData.rates.ARS);
        this.RatesMap.set('EURBRL', this.fixerData.rates.BRL);
        this.RatesMap.set('USDARS', this.fixerData.rates.ARS / this.fixerData.rates.USD);
        this.RatesMap.set('USDBRL', this.fixerData.rates.BRL / this.fixerData.rates.USD);
        this.RatesMap.set('BRLARS', this.fixerData.rates.ARS / this.fixerData.rates.BRL);
    }

    // Get fee porcentage from pair
    getFeePorcentage(pair) {
        switch (pair) {
            case 'EURUSD':
                return 1;
            case 'EURARS':
                return 3;
            case 'EURBRL':
                return 4;
            case 'USDARS':
                return 2;
            case 'USDBRL':
                return 1;
            case 'BRLARS':
                return 7;
            default:
                return 5;
        }
    }

    // Get converted amount
    getRate(pair, amount) {
        let rateObj = {};

        rateObj.convertAmount = (this.RatesMap.get(pair) * amount).toFixed(2);
        rateObj.fee = this.getFeePorcentage(pair);
        let feeAmount = amount * (this.getFeePorcentage(pair) / 100);
        rateObj.feeAmount = feeAmount.toFixed(2);
        let markAmount = amount + feeAmount;
        rateObj.mark = markAmount.toFixed(2);
        return rateObj;
    }

}