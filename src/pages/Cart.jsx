import React from 'react';
import styles from "../pages/index.module.css";
import { useSelector } from "react-redux"

export default function Index() {


  let data = useSelector(state => state.customers.customers);

  return (
    <div>
      <section className='align-element py-20'>
        <div className="border-b border-base-300 pb-5">
          <h2 className='text-3xl font-medium tracking-wider capitalize'>Shopping Cart</h2>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {
              data.map((el) => {

                return (
                  <article className={`mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0 ${styles.article}`}>
                    <img src={el.image} alt="avant-garde lamp" className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover' />
                    <div className="sm:ml-16 sm:w-48">
                      <h3 className="capitalize font-medium">{el.title}</h3>
                      <h4 className='mt-2 capitalize text-sm text-neutral-content'>{el.company}</h4>
                      <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
                        "color :"
                        <span className='badge badge-sm' style={{ backgroundColor: 'rgb(51, 255, 87)' }}></span>
                      </p>
                    </div>
                    <div className="sm:ml-12">
                      <div className="form-control max-w-xs">
                        <label htmlFor='amount' className='label p-0'>
                          <span className='label-text'>Amount</span>
                        </label>
                        <select name="amount" id="amount" className="mt-2 select select-base select-bordered select-xs">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <button className='mt-2 link link-primary link-hover text-sm'>remove</button>
                    </div>
                    <p className="font-medium sm:ml-auto">${el.price}</p>
                  </article>

                )

              })
            }
          </div>
          <div className="lg:col-span-4 lg:pl-4">
            <div className='card bg-base-200'>
              <div className="card-body">
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                  <span>Subtotal</span>
                  <span className='font-medium'>$1,239.93</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                  <span>Shipping</span>
                  <span className='font-medium'>$5.00</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                  <span>Tax</span>
                  <span className='font-medium'>$123.99</span>
                </p>
                <p className='flex justify-between text-xs border-b border-base-300 pb-2'>
                  <span>Order Total</span>
                  <span className='font-medium'>$1,368.92</span>
                </p>
              </div>
            </div>
            <p className='btn btn-primary btn-block mt-8'>please login</p>
          </div>
        </div>
      </section>
    </div>
  );
}
