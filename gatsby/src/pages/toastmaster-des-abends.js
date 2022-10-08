import React from "react"
import Layout from "../components/layout/layout"
import Loadable from "@loadable/component";

const LoadableEinladungsMailer = Loadable(() =>
  import("../app/src/EinladungsMailer")
);

const ToastmasterDesAbends = () => {
return <Layout>
            <LoadableEinladungsMailer />
        </Layout>
}

export default ToastmasterDesAbends;