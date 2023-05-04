import React from "react";
import Card from "../components/card";
import autometerf1 from '../media/autometerafr.png'
import autometerboost from '../media/autometerboost.png'
import autometerfuel from '../media/autometerfuel.png'
import autometeroil from '../media/autometeroil.png'
import ft300 from '../media/ft300.png'
import ft350 from '../media/ft350.png'
import ft400 from '../media/ft400.png'
import ft450 from '../media/ft450.png'
import rotaboost from '../media/rotaboost.png'
import rotagridcl from '../media/rotagridcl.png'
import rotagrid2r from '../media/rotagrid2r.png'
import rotart5r from '../media/ROTART5R.png'
import ftvolante from '../media/volantefts.png'
import nrg from '../media/RSt018BSB.png'
import nrg1 from '../media/rst036fl.png'
import nrg2 from '../media/rst-018bsb.png'


const Products = () => (
    <section className="Products">
        <div>
            <div class="row">
                <div class="col">
                    <Card title='Autometer AFR' image={autometerf1} description='Mezcla de Aire y Combustible' price='$89000' />
                </div>
                <div class="col">
                    <Card title='Autometer Boost' image={autometerboost} description='Mide la presión de turbo' price='$45000'/>
                </div>
                <div class="col">
                    <Card title='Autometer Fuel' image={autometerfuel} description='Mide la presión de combustible' price='$48000'/>
                </div>
                <div class="col">
                    <Card title='Autometer Oil' image={autometeroil} description='Mide la presión de aceite' price='$23000'/>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <Card title='Fueltech 300' image={ft300} description='Ecu programable' price='$200000'/>
                </div>
                <div class="col">
                    <Card title='Fueltech 350' image={ft350} description='Ecu programable' price='$250000'/>
                </div>
                <div class="col">
                    <Card title='Fueltech 400' image={ft400} description='Ecu programable' price='$350000'/>
                </div>
                <div class="col">
                    <Card title='Fueltech 450' image={ft450} description='Ecu programable' price='$400000'/>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <Card title='Rota Boost' image={rotaboost} description='5x114,3' price='$250000'/>
                </div>
                <div class="col">
                    <Card title='Rota Grid CL' image={rotagridcl} description='4x114,3' price='$250000'/>
                </div>
                <div class="col">
                    <Card title='Rota Grid 2R' image={rotagrid2r} description='5x100' price='$250000'/>
                </div>
                <div class="col">
                    <Card title='Rota RT5R' image={rotart5r} description='5x100' price='$250000'/>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <Card title='Fueltech' image={ftvolante} description=' - ' price='$89000'/>
                </div>
                <div class="col">
                    <Card title='NRG' image={nrg} description=' - ' price='$89000'/>
                </div>
                <div class="col">
                    <Card title='NRG' image={nrg1} description=' - ' price='$89000'/>
                </div>
                <div class="col">
                    <Card title='NRG' image={nrg2} description=' - ' price='$89000'/>
                </div>
            </div>
        </div>
    </section>
)

export default Products