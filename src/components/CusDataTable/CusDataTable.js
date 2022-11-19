import React from 'react'

function CusDataTable(props) {

    const { dataSource, colValue } = props

    return (
        <>
            {colValue && Array.isArray(colValue) && (
                <table className='table table-bordered' style={{ fontSize: '0.8rem' }}>
                    <thead>
                        <tr>
                            <th>#</th>
                            {colValue && colValue.length > 0 ? colValue.map((e, i) => {
                                return <th scope="col" key={i}>{e.name}</th>
                            }) : null}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSource && Array.isArray(dataSource) && dataSource.length > 0 ? (
                            dataSource.map((e, i) => {
                                return <tr className='table-light' scope='row' key={i}>
                                    <th>{i + 1}</th>
                                    {colValue && colValue.length > 0 ? colValue.map((x, i) => {
                                        return <td key={i}>{e[x.key]}</td>
                                    }) : null}
                                </tr>
                            })
                        ) : (
                            <tr className='table-light' scope='row'>
                                <th>1</th>
                                {colValue && colValue.length > 0 ? colValue.map((x, i) => {
                                    return <td>Data Not Found</td>
                                }) : null}
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default CusDataTable