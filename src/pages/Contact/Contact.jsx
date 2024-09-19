import React from 'react';
import { useState } from 'react';

export const Contact = () => {
    const [name, setName] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");

    
    const numberFormat = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value).replace(/^(\D+)/, '');
    }
    
    const handleBudget = (e) => {
        let inputValue = e.target.value;

        let numericValue = inputValue.replace(/[^0-9]/g, '');

        let formattedValue = numberFormat(numericValue);

        setBudget(formattedValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //url whatsapp api untuk mengirim pesan
        window.open(`https://api.whatsapp.com/send?phone=6281241659884&text=Halo nama saya ${name}, saya tertarik untuk menggunakan jasa membuat website dari Develeopeight. Saya mempunyai budget ${budget} dan ingin membuat website seperti berikut ini:%0A${message}`);
    }

    return (
        <div className="container">
            <div className="py-5">
                <div className="row align-items-center py-5">
                    <div className="col-lg-8">
                        <h1 className="fw-semibold medium-title my-heading1"><span className="text-dark">Let us help you to solve the</span> problem.</h1>
                        <p className="text-muted fs-4 lh-base mt-3 my-text">Start from research to working on the real-world projects that impactful</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="card rounded border-0">
                            <div className="card-body">
                                <form className="p-2" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text border-fade py-3 bg-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg></span>
                                            <input type="text" className="form-control border-fade py-3" id="name" placeholder="Your Name..." onChange={(e) => setName(e.target.value)} aria-label="Name" required/>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="budget" className="form-label fw-semibold">Budget</label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text border-fade py-3 bg-white"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-businessplan"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" /><path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" /><path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" /><path d="M5 15v1m0 -8v1" /></svg></span>
                                            <input type="text" className="form-control border-fade py-3" id="budget" placeholder="Your Budget..." onChange={handleBudget} value={budget} aria-label="Budget" required/>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="form-label fw-semibold">Project Brief</label>
                                        <textarea className="form-control border-fade disable-resize" id="message" rows="5" onChange={(e) => setMessage(e.target.value)} placeholder="Description About Project..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark py-2 text-center w-100">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
