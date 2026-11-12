import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import HeaderBanner from '../components/HeaderBanner';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';

const SERVICE_PACKAGES = [
  { id: '1', name: 'Service Ringan + Ganti Oli', desc: 'Tune up injeksi, cek rem, ganti oli mesin', price: 85000 },
  { id: '2', name: 'Service CVT Lengkap', desc: 'Pembersihan pulley, cek roller & v-belt', price: 110000 },
  { id: '3', name: 'Service Besar (Overhaul Ringan)', desc: 'Tune up total, CVT, oli mesin & oli gardan', price: 185000 },
];

export default function HomeScreen({ navigation, bookings, onAddBooking }) {
  const [selectedService, setSelectedService] = useState(SERVICE_PACKAGES[0]);

  const handleBookingSuccess = (newData) => {
    onAddBooking(newData);
    navigation.navigate('Antrean'); // Navigasi otomatis ke halaman Antrean
  };

  return (
    <View style={styles.screen}>
      <HeaderBanner
        title="MotoCare Service"
        subtitle="Booking Service Motor Tanpa Antre"
        totalQueue={bookings.length}
      />

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>1. Pilih Paket Service</Text>
        {SERVICE_PACKAGES.map((pkg) => (
          <ServiceCard
            key={pkg.id}
            item={pkg}
            isSelected={selectedService?.id === pkg.id}
            onSelect={setSelectedService}
          />
        ))}

        <BookingForm
          selectedService={selectedService}
          onSubmitBooking={handleBookingSuccess}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 10,
  },
});