import { z } from 'zod';

export const WeatherResponseSchema = z.object({
  location: z.object({
    name: z.string(),
    country: z.string(),
  }),
  current: z.object({
    weather_icons: z.array(z.string()),
    weather_descriptions: z.array(z.string()),
    wind_speed: z.number(),
    wind_degree: z.number(),
    wind_dir: z.string(),
    pressure: z.number(),
    precip: z.number(),
    humidity: z.number(),
    temperature: z.number(),
    cloudcover: z.number(),
    feelslike: z.number(),
    uv_index: z.number(),
    visibility: z.number(),
  }),
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;
