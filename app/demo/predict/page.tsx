import { predictOSCC } from "@/app/lib/model";
export default async function Predict() {
    const result = await predictOSCC("cm25f2qyq0002fpij38p31vrn");
    return (<p>OK</p>);
}