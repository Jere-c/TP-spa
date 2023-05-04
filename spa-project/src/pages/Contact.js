import React from "react";

const Contact = () => (
    <section className="Contact">
        <div class='container-form'>
            <form>
                <div class="mb-3 d-inline-flex container-fluid">
                    <div class="container-fluid">
                        <label for="exampleInputEmail1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="container-fluid">
                        <label for="exampleInputEmail1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div class="mb-3 container-fluid">
                    <div class="container-fluid">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputPassword1" />
                        <label for="exampleInputPassword1" class="form-label">Telefono</label>
                        <input type="email" class="form-control" id="exampleInputPassword1" />
                        <label for="exampleInputPassword1" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        <div class="mb-3 form-check">
                        <br/>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />

                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Enviar</button>
                    </div>
                </div>

            </form>
        </div>
    </section>
)

export default Contact