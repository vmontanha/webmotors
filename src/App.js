import React, { useState, useEffect } from 'react'
import './assets/css/App.css';
import logo from './assets/img/logo.svg'
import iconCar from './assets/img/icon__car.svg'
import motoPng from './assets/img/MOTO 64G.png'
import Select from 'react-select';
import axios from 'axios';
function App() {

          const [make, setMake] = useState([]);
          const [model, setModel] = useState([]);
          const [version, setVersion] = useState([]);

          const api = axios.create({
                    baseURL: "https://desafioonline.webmotors.com.br/api/OnlineChallenge",
          });

          useEffect(() => {
                    api
                              .get("/Make")
                              .then((response) => setMake(response.data))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });
                    api
                              .get("Model?MakeID=1")
                              .then((response) => setModel(response.data))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });
                    api
                              .get("Version?ModelID=1")
                              .then((response) => setVersion(response.data))
                              .catch((err) => {
                                        console.error("ops! ocorreu um erro" + err);
                              });
          }, []);



          const optionsCitys = [
                    { value: 'sao-paulo', label: 'São Paulo - SP' },
                    { value: 'minas-gerais', label: 'Minas Gerais - BH' },
                    { value: 'rio-janeiro', label: 'Rio de Janeiro - RJ' }
          ]
          const optionsRaio = [
                    { value: '100', label: '100km' },
                    { value: '200', label: '200km' },
                    { value: '300', label: '300km' }
          ]
          const optionModelo = [
                    // API
          ]
          const optionsFaixaDePreco = [
                    { value: '10.000', label: 'Até R$ 10.000,00' },
                    { value: '20.000', label: 'Até R$ 20.000,00' },
                    { value: '30.000', label: 'Até R$ 30.000,00' }
          ]
          const optionsAnoDesejado = [
                    { value: '1992', label: 'Até 1992' },
                    { value: '2012', label: 'Até 2012' },
                    { value: '2022', label: 'Até 2022' }
          ]
          const optionsVersao = [
                    { value: 'all', label: 'Todas' }
          ]

          const customCity = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#ccc',
                              ':before': {
                                        content: "'Onde:'",
                                        display: 'block',
                                        marginRight: 0,
                                        marginTop: 10,
                                        marginLeft: 5,
                                        fontWeight: 200,

                              },
                    }),
          }
          const customVersao = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#ccc',
                              ':before': {
                                        content: "'Versão:'",
                                        display: 'block',
                                        marginRight: 0,
                                        marginTop: 10,
                                        marginLeft: 5,
                                        fontWeight: 200,

                              },
                    }),
          }
          const customeMarca = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#ccc',
                    }),
          }
          const customRaio = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#000',
                    }),
          }
          const customAnoDesejado = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#000',
                    }),
          }
          const customFaixaDePreco = {
                    control: () => ({
                              display: 'flex',
                              border: '1px solid #ddd',
                              borderRadius: 2,
                              color: '#000',
                    }),
          }



          return (
                    <div className="container">
                              <div className='logo'>
                                        <img className='logo__img' src={logo} alt="" />
                              </div>
                              <div className='box__header'>
                                        <div className='header'>
                                                  <div className='accordion__car'>
                                                            <img className='icon__car' src={iconCar} />
                                                            <div className='buy__cars'>
                                                                      <p className='buy__cars-comprar'>comprar</p>
                                                                      <p className='buy__cars-carros'>Carros</p>
                                                            </div>
                                                  </div>
                                                  <div className='accordion__bike'>
                                                            <img className='icon__car' src={motoPng} />
                                                            <div className='buy__cars'>
                                                                      <p className='buy__moto-comprar'>comprar</p>
                                                                      <p className='buy__moto-bike'>Motos</p>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                              <div className='box__selects'>
                                        <div className='check__buttons'>
                                                  <div className='box__checkbox'>
                                                            <input type='checkbox' />
                                                            <p>Novos</p>
                                                  </div>
                                                  <div className='box__checkbox'>
                                                            <input type='checkbox' />
                                                            <p>Usados</p>
                                                  </div>
                                        </div>

                                        <div className="box__city-raio">
                                                  <div className='box__city'>
                                                            <Select options={optionsCitys} defaultValue={optionsCitys[0]} styles={customCity} />
                                                  </div>

                                                  <div className='box__raio'>
                                                            <Select options={optionsRaio} placeholder={"Raio:"} styles={customRaio} />
                                                  </div>
                                        </div>
                                        <div className="box__marca-modelo">
                                                  <div className='box__marca'>
                                                            <Select options={make.map(e => ({ label: e.Name, value: e.ID }))} className="select" placeholder={"Marca:"} styles={customeMarca} />
                                                  </div>
                                                  <div className='box__modelo'>
                                                            <Select options={model.map(e => ({ label: e.Name, value: e.ID }))} placeholder={"Modelo:"} styles={customRaio} />
                                                  </div>
                                        </div>
                                        <div className="box__ano-preco">
                                                  <div className='box__ano'>
                                                            <Select options={optionsAnoDesejado} placeholder={"Ano Desejado:"} styles={customAnoDesejado} />
                                                  </div>
                                                  <div className='box__preco'>
                                                            <Select options={optionsFaixaDePreco} placeholder={"Preço:"} styles={customFaixaDePreco} />
                                                            {/* Fazer um if else para faixa de preco */}
                                                  </div>

                                        </div>
                                        <div className="box__versao">
                                                  <Select styles={customVersao} defaultValue={optionsVersao[0]} options={version.map(e => ({ label: e.Name, value: e.ID }))} />
                                        </div>

                                        <div className='block__ofertas'>
                                                  <a href='#' className='btn__ofertas'>Ver Ofertas</a>
                                        </div>

                                        <div className='block__limpar__filtros'>
                                                  <a href='#' className='btn__limpar__filtros' >Limpar Filtros</a>
                                        </div>


                                        <div className='block__sale'>
                                                  <a href='#' className='btn__sale'>Vender meu carro</a>
                                        </div>

                                        <div className='block__busca'>
                                                  <a href='#' className='btn__busca' >Busca Avançada</a>
                                        </div>




                              </div>

                    </div>
          );
}

export default App;
