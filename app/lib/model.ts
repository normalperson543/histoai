import * as tf from "@tensorflow/tfjs-node";

export async function predictOSCC(image: File) {
    const model = await tf.loadLayersModel('/model/model.json');
    const imageDataArrayBuffer = await image.arrayBuffer();
    const imageData = new Uint8Array(imageDataArrayBuffer);
    const imageTensor = tf.node.decodeJpeg(imageData);
    const prediction = model.predict(imageTensor);
    console.log("DONE");
    let predictionArray = prediction.arraySync();

    /*https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#13 */
    console.log(predictionArray);
}