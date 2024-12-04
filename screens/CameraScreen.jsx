import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';
import axios from 'axios';
import styles from '../styles/camerascreen'

export default function CameraScreen() {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef(null);
  const SERVER_URL = 'http://192.168.223.152:5000/detect';

  useEffect(() => {
    if (!permission) requestPermission();
  }, [permission]);

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const captureFrameAndSendToServer = async () => {
    if (cameraRef.current && !isProcessing) {
      setIsProcessing(true);
      try {
        const photo = await cameraRef.current.takePictureAsync({
          base64: true,
          quality: 0.5,
        });

        const response = await axios.post(SERVER_URL, { image: photo.base64 });
        console.log(response.data.bounding_boxes);
        setBoundingBoxes(response.data.bounding_boxes);
      } catch (error) {
      } finally {
        setIsProcessing(false);
      }
    }
  };

  useEffect(() => {
      const interval = setInterval(() => {
        captureFrameAndSendToServer();
      }, 1000);

      return () => {
        clearInterval(interval); // Clear the interval when the screen loses focus
        setBoundingBoxes([]); // Clear bounding boxes
        setIsProcessing(false);
      };
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
        (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <Svg style={styles.overlay}>
            {boundingBoxes.map((box, index) => (
              <React.Fragment key={index}>
                <Rect
                  x={box.x}
                  y={box.y}
                  width={box.width}
                  height={box.height}
                  stroke="red"
                  strokeWidth="2"
                  fill="transparent"
                />
                <SvgText
                  x={box.x}
                  y={box.y - 10}
                  fill="red"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Human
                </SvgText>
              </React.Fragment>
            ))}
          </Svg>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      )
    </View>
  );
}
