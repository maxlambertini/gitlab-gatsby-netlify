import * as React from 'react'
import Layout from '../components/layout'
import JSON from '../content/antani.json'

const Jsonizzati = () => {
    return (
    <Layout pageTitle={JSON.title}>
        <ul>
            {JSON.data.map((data, index) => {
                return (
                    <li key={data.nome}>{data.nome} ha come potere {data.superpotere}</li>
                )
            })}   
        </ul>
    </Layout>
    )
}

export default Jsonizzati