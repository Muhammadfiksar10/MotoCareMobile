import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function BookingForm({ selectedService, onSubmitBooking }) {
  // Penggunaan Hook useState untuk form input
  const [ownerName, setOwnerName] = useState('');
  const [motorType, setMotorType] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleRegister = () => {
    if (!ownerName.trim() || !motorType.trim() || !plateNumber.trim()) {
      Alert.alert('Data Belum Lengkap', 'Harap isi Nama Pemilik, Tipe Motor, dan Nomor Polisi.');
      return;
    }

    if (!selectedService) {
      Alert.alert('Pilih Paket', 'Silakan pilih salah satu paket service terlebih dahulu.');
      return;
    }

    const newBooking = {
      id: Date.now().toString(),
      ownerName,
      motorType,
      plateNumber: plateNumber.toUpperCase(),
      complaint: complaint || 'Service rutin berkala',
      serviceName: selectedService.name,
      price: selectedService.price,
      status: 'Menunggu Antrean',
      createdAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    onSubmitBooking(newBooking);

    // Reset form setelah submit
    setOwnerName('');
    setMotorType('');
    setPlateNumber('');
    setComplaint('');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.sectionTitle}>Data Kendaraan & Pemilik</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Pemilik (Contoh: Muhammad Fiksar)"
        value={ownerName}
        onChangeText={setOwnerName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipe Motor (Contoh: Honda Vario 150)"
        value={motorType}
        onChangeText={setMotorType}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Polisi (Contoh: F 1234 ABC)"
        autoCapitalize="characters"
        value={plateNumber}
        onChangeText={setPlateNumber}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Keluhan Tambahan (Opsional, misal: CVT gredek)"
        multiline
        numberOfLines={3}
        value={complaint}
        onChangeText={setComplaint}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Daftar Service Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    backgroundColor: '#F8FAFC',
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#EF4444',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});