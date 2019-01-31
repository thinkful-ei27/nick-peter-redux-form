import React from 'react';
import './form.css';

export default function(){
    return (
        <div role='container'>
          <form>
              <label htmlFor='trackingNumber'>Tracking Number</label>
              <input type='text' name='trackingNumber'></input>
              <label htmlFor='issue'>What is your issue?</label>
              <select name='issue'>
                <option value=''>Help!</option>
                <option value='not-delivered'>My delivery hasn't arrived</option>
                <option value='wrong-item'>The wrong item was delivered</option>
                <option value='missing-part'>Part of my order was missing</option>
                <option value='damaged-part'>Some of my order arrived damage</option>
                <option value='other'>Other (give details below)</option>
              </select>
              <label htmlFor='details'>Give more details (optional)</label>
              <textarea name='details'></textarea>
          </form>
        </div>
    )
}