
function Rate(params) {

    // Format date from db
    function getDateFormat(ISOdate) {
        let date = new Date(ISOdate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return (<p className="m-0 mt-1 text-center text-secondary">{dt + '/' + month + '/' + year + ' ' + hour + ':' + min}</p>);
    }

    return (
        <div className="col-4 mb-2">

            <div className="card border border-primary cardShadown">
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <p className="text-center">{params.rate.pair.from.amount + " " + params.rate.pair.from.rate}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-center bd-highlight">
                                <h6 className="bd-highlight text-primary">TO</h6>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="container">
                                <p className="text-center">{params.rate.pair.to.amount + " " + params.rate.pair.to.rate}</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <p className="m-0">{"Fee " + params.rate.fee + "%"}</p>
                            <p className="m-0">{"Fee amount " + params.rate.feeAmount + " " + params.rate.pair.from.rate}</p>
                            <p className="m-0 mb-3">{"Mark-up " + params.rate.mark + " " + params.rate.pair.from.rate}</p>
                        </div>
                        <div className="col-12">
                            <hr className="mx-1 my-0"></hr>
                        </div>
                        <div className="col-12">
                            {getDateFormat(params.rate.date)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Rate;