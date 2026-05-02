import type { PricingPlan } from "../types";
import pricingData from "../data/pricing.json";

const plans: PricingPlan[] = pricingData;

function Pricing() {
  return (
    <section id="pricing">
      <h2>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for you and your dog.</p>
      <div className="row">
        {plans.map((plan) => (
          <div className="pricing-col col-lg-4 col-md-6" key={plan.id}>
            <div className="card">
              <div className="card-header">
                <h3>{plan.name}</h3>
              </div>
              <div className="card-body">
                <h2>{plan.price}</h2>
                {plan.features.map((feature) => (
                  <p key={feature}>{feature}</p>
                ))}
                <button
                  className={`btn btn-lg btn-block ${plan.highlighted ? "btn-dark" : "btn-outline-dark"}`}
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
