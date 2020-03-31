import React from "react";

export default function numberWithCommas(amount, blank_sign = '0', digit = false) {

    let formatter = new Intl.NumberFormat('en', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if (digit || digit === 0) {
        formatter = new Intl.NumberFormat('en', {
            minimumFractionDigits: digit,
            maximumFractionDigits: 2
        });
    }

    if (amount !== undefined && !isNaN(amount) && amount !== 0 && amount !== null) {
        if(amount < 0) {
            amount = amount * -1;
            return <strong className='text-red'>({formatter.format(amount)})</strong>;
        } else {
            return formatter.format(amount);
        }
    } else {
        return blank_sign;
    }
};
