# Stage-1 & specify a name 'builder'
FROM  node:20 AS builder

# Create a directory  and go to the directory 
WORKDIR /app

# Copy the package.json file to my current directory to install the necessary dependence  
COPY package.json .

# Install the dependence
RUN npm install

# Copy other files to my current directory
COPY . .

# Build and optimize static file
RUN npm run build

# Stage-2
FROM  nginx:alpine

# Copy the build file from the previous stage to the current directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Open the port for the express server
EXPOSE 80

# Run express rum in the foreground
CMD ["nginx", "-g", "daemon off;"]
