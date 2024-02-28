

function FormFourthStep() {
    return (
        <section className="form">
            <div className="step">
                <p>Krok 4/4</p>
                <h3>Podaj adres oraz termin odbioru rzecz przez kuriera</h3>
                <h4>Adres odbioru:</h4>
                <label>Ulica <input type="text" /></label>
                <label>Miasto <input type="text" /></label>
                <label>Ulica <input type="text" /></label>
                <label>Kod pocztowy<input type="text" id="postalCode" name="postalCode" pattern="[0-9]{2}-[0-9]{3}" required /></label>
                <label>Numer telefonu<input type="text" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required /></label>

                <h4>Adres odbioru:</h4>
                <label>Data <input type="text" /></label>
                <label>Godzina <input type="text" /></label>
                <label>Uwagi dla kuriera <input type="text" /></label>


                <div className="form__btns">
                    <button>Wstecz</button>
                    <button>Dalej</button>
                </div>
            </div>

        </section>
    )
}
export default FormFourthStep;