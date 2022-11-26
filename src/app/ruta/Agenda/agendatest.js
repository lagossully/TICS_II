import React, { Component } from "react";
// style={{opacity: 0.2}}
// style={{opacity: 0.2}}
function Test(){
return(
<div className="container">
    <div className="panel panel-color panel-info">
        <div className="panel-heading">
            <h3 className="panel-title">Horarios</h3>
        </div>
        <div className="panel-body" id="div-disponibilidad-horarios">
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th className="col-width-5 th-prox-semana cp" data-fecha=" 2022/11/26 "><i
                                    className="fa fa-chevron-left" aria-hidden="true"></i></th>
                            <th className="col-width-10  text-center active">LUN<br/><small>21-11</small></th>
                            <th className="col-width-10  text-center active">MAR<br/><small>22-11</small></th>
                            <th className="col-width-10  text-center ">MIE<br/><small>23-11</small></th>
                            <th className="col-width-10  text-center active">JUE<br/><small>24-11</small></th>
                            <th className="col-width-10  text-center active">VIE<br/><small>25-11</small></th>
                            <th className="col-width-10 bg-info text-white text-center ">SAB<br/><small>26-11</small></th>
                            <th className="col-width-10  text-center ">DOM<br/><small>27-11</small></th>
                            <th className="col-width-5 th-prev-semana cp" data-fecha=" 2022/12/03 "><i
                                    className="fa fa-chevron-right" aria-hidden="true"></i></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">17:00</div>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>

                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">17:15</div>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>

                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">17:30</div>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:30</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:30</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:30</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:30</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>

                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">17:45</div>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:45</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:45</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:45</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">17:45</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>

                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">18:00</div>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:00</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>

                        <tr>
                            <td className="col-width-5 text-right">
                                <div className="hidden-xs">18:15</div>
                            </td>
                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-center-calendario text-center va-middle " style={{opacity: 0.2}}>
                                <div className="visible-xs">18:15</div>
                                <span className="label label-default">Ocupado</span>
                            </td>

                            <td className="col-width-10 border-rigth-calendario border-dia-actual"></td>

                            <td className="col-width-10 border-rigth-calendario "></td>

                            <td className="col-width-5 border-rigth-calendario"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
)}

export default  Test;