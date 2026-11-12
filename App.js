import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import QueueScreen from './src/screens/QueueScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  // State utama aplikasi yang dikirim via props ke komponen layar
  const [bookings, setBookings] = useState([
    {
      id: '101',
      ownerName: 'Ahmad Fauzi',
      motorType: 'Yamaha NMAX 155',
      plateNumber: 'F 4521 UMI',
      complaint: 'Ganti oli rutin & cek kampas rem',
      serviceName: 'Service Ringan + Ganti Oli',
      price: 85000,
      status: 'Menunggu Antrean',
      createdAt: '09:30',
    },
  ]);

  // Hook useEffect memantau perubahan jumlah antrean
  useEffect(() => {
    console.log(`Jumlah antrean saat ini: ${bookings.length}`);
  }, [bookings]);

  const handleAddBooking = (newBooking) => {
    setBookings((prev) => [newBooking, ...prev]);
    Alert.alert('Pendaftaran Berhasil', `Motor ${newBooking.plateNumber} masuk antrean!`);
  };

  const handleCompleteBooking = (id) => {
    setBookings((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Selesai' } : item))
    );
  };

  const handleDeleteBooking = (id) => {
    setBookings((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#EF4444',
          tabBarInactiveTintColor: '#64748B',
          tabBarStyle: { paddingBottom: 6, height: 60 },
        }}
      >
        <Tab.Screen name="Pendaftaran">
          {(props) => (
            <HomeScreen
              {...props}
              bookings={bookings}
              onAddBooking={handleAddBooking}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Antrean">
          {(props) => (
            <QueueScreen
              {...props}
              bookings={bookings}
              onCompleteBooking={handleCompleteBooking}
              onDeleteBooking={handleDeleteBooking}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}