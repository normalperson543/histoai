'use client';
import * as tf from "@tensorflow/tfjs";
export default async function predictOSCC(imageElement: HTMLImageElement) {
    const model = await tf.loadGraphModel('/model/model.json');
    const imageTensor = tf.browser.fromPixels(imageElement);
    let resizedTensorFrame = tf.image.resizeBilinear(
        imageTensor, 
        [224, 224]
    );
    //let normalizedTensorFrame = resizedTensorFrame.div(255) as tf.Tensor;

    const prediction = await (model.predict(resizedTensorFrame.expandDims()) as tf.Tensor).squeeze();
    const predictionArray = prediction.arraySync() as number;
    let osccDetected;
    let confidenceRate;
    if (predictionArray >= 0.5) {
        osccDetected = true;
        confidenceRate = (predictionArray - 0.5) * 2
    }
    else {
        osccDetected = false;
        confidenceRate = (0.5 - predictionArray) * 2
    }
    /*https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine#13 */
    return {prediction: osccDetected, confidenceRate: confidenceRate};
}