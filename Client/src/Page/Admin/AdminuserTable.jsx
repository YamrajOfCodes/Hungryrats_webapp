import React from 'react'
// import "./tabel.scss"
import { Card, Dropdown, Row, Table } from 'react-bootstrap'




const AdminuserTable = ({getallusers}) => {

    console.log(getallusers);

    return (
        <>
            <div className="container">
                <h4>Users</h4>

                <Row>
                    <div className="col mt-0 mb-3">
                        <Card className='shadow'>
                            <Table className='align-items-center' responsive="sm">
                                <thead className='thead-dark'>
                                    <tr className='table-dark'>
                                        <th>ID</th>
                                        <th>FullName</th>
                                        <th>Email</th>
                                        <th>Profile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                   
                                          
                                                <>
                                                {
                                                    getallusers?.map((element,index)=>{
                                                        return(
                                                            <> 
                                                            <tr key={element._id}>
                                                        <td>{index}</td>
                                                        <td>{element?.Firstname}   {element?.Lastname}</td>
                                                        <td>{element?.email}</td>
                                                        <td className='img_parent'>
                                                            <img src={element?.profile} width={"70px"} alt="" />
                                                        </td>
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant='light' className='action' id="dropdown-basic">
                                                                    <i className='fa-solid fa-ellipsis-vertical' style={{color:'black'}}></i>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item >
                                                                        <div>
                                                                            <i class="fa-solid fa-trash" style={{ color: "red" }}></i>

                                                                            <span>Delete</span>
                                                                        </div>
                                                                    </Dropdown.Item>


                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </td>
                                                    </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                                </>
                                            
                                     

                                </tbody>
                            </Table>
                            {/* <Paginations
                                // page={page}
                                // pageCount={pageCount}
                                // setPage={setPage}
                                // handlePrevios={handlePrevios}
                                // handleNext={handleNext}
                            /> */}
                        </Card>
                    </div>
                </Row>
            </div>
        </>
    )
}

export default AdminuserTable