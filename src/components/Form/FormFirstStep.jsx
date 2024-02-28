

function FormFirstStep() {
    return (
        <section className="form">
            <div className="step">
                <p>Krok 1/4</p>
                <h3>Zaznacz co chcesz oddać:</h3>

                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />ubrania, które nadają się do ponownego użycia
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />ubrania, do wyrzucenia
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />zabawki
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />książki
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" value="" />inne
                    </label>
                </div>

                <div className="form__btns">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        </section>
    );
}
export default FormFirstStep;