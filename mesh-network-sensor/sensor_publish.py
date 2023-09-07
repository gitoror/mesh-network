from supabase import create_client
import time
import board
import adafruit_dht

dhtDevice = adafruit_dht.DHT11(board.D17)


# import os
# from dotenv import load_dotenv
# load_dotenv()
SUPABASE_URL = "https://blohwsaczppxeqzmsohm.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsb2h3c2FjenBweGVxem1zb2htIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1MTA5NDgsImV4cCI6MTk5NjA4Njk0OH0.afg2QD5lBbRZIx_MhNCC64J2kUHMHbDbqShU2Iuz5po"


url = SUPABASE_URL
key = SUPABASE_KEY
supabase = create_client(url, key)

sensor_name = "nodeTom"


def publish_sensor_data(temperature, humidity, sensor_name):
    data = {'temperature': temperature,
            'humidity': humidity, 'sensor_name': sensor_name}
    supabase.table('measures').insert(data).execute()


while True:
    try:
        temperature_c = dhtDevice.temperature
        humidity = dhtDevice.humidity
        publish_sensor_data(temperature_c, humidity, sensor_name)
        print("temp", temperature_c, "humidity", humidity)
    except RuntimeError as error:
        # Errors happen fairly often, DHT's are hard to read, just keep going
        print(error.args[0])
        time.sleep(2.0)
        continue
    except Exception as error:
        dhtDevice.exit()
        raise error
    time.sleep(15.0)
