import React, { useEffect } from 'react';
import css from './Checkout.module.scss';

const Checkout = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={css.checkout_page}>

      <div className={css.left}>
        <div className="accordion" id="accordionExample">
          <div className={`${css.card} card`}>
            <div className={css.card_header} id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Login
                    </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
            </div>
          </div>
          <div className={`${css.card} card`}>
            <div className={css.card_header} id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Delivery Address
                    </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
            </div>
          </div>
          <div className={`${css.card} card`}>
            <div className={css.card_header} id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Payment Options
                  </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">

                <div>
                  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#cash-on-delivery" aria-expanded="false" aria-controls="cash-on-delivery"> Cash on Delivery</button>

                  <div className="collapse" id="cash-on-delivery">
                    <div className="card card-body">
                      Cash on Delivery
                  </div>
                  </div>
                </div>


                <div>
                  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#phonepe" aria-expanded="false" aria-controls="phonepe">PhonePe </button>

                  <div className="collapse" id="phonepe">
                    <div className="card card-body">
                      PhonePe
                  </div>
                  </div>
                </div>



                <div>
                  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#google-pay" aria-expanded="false" aria-controls="google-pay"> GooglePay</button>

                  <div className="collapse" id="google-pay">
                    <div className="card card-body">
                      GooglePay
                  </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={css.right}>
        <h2 className={css.price_details_heading}>Price details</h2>
        <div>
          Price (1 item) -  ₹1,798
        </div>
        <div>
          Delivery Charges  Free
        </div>
        <div>Amount Payable -  ₹1,798</div>
      </div>
    </div>
  )
}
export default Checkout;