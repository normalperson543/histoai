'use client';
import * as tf from "@tensorflow/tfjs";
export default async function predictOSCC(imageElement: HTMLImageElement) {
    const model = await tf.loadLayersModel('/model/model.json');
    const imageTensor = tf.browser.fromPixels(imageElement);
    let resizedTensorFrame = tf.image.resizeBilinear(
        imageTensor, 
        [224, 224]
    );
    //let normalizedTensorFrame = resizedTensorFrame.div(255) as tf.Tensor;

    const prediction = await (model.predict(resizedTensorFrame.expandDims()) as tf.Tensor).squeeze();
    const predictionArray = prediction.arraySync() as number;
    let osccDetected;
    if (predictionArray >= 0.5) {
        osccDetected = true;
    }
    else {
        osccDetected = false;
    }
    /*https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#13 */
    return {prediction: osccDetected, confidenceRate: predictionArray};
}