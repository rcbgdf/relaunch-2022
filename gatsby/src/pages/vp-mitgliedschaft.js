import React from "react"
import Layout from "../components/layout/layout"
import Loadable from "@loadable/component";

const LoadableMailVerteiler = Loadable(() =>
  import("../app/src/MailVerteiler")
);

const VpMitgliedschaft = () => {
return <Layout>
            <LoadableMailVerteiler />
        </Layout>
}

export default VpMitgliedschaft;