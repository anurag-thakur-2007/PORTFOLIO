import cv2
import os

video_path = r"D:\my projects\portfolio\portfolio  vdo .mp4"
output_dir = r"D:\my projects\portfolio\extracted_frames"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

if not os.path.exists(video_path):
    print(f"Error: Video file not found at {video_path}")
    exit(1)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = total_frames / fps

print(f"Video FPS: {fps}, Total Frames: {total_frames}, Duration: {duration:.2f}s")

# Extract one frame every 1.5 seconds to capture transitions
interval = 1.5  # seconds
frame_interval = max(1, int(fps * interval))

count = 0
saved_count = 0
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    if count % frame_interval == 0:
        output_path = os.path.join(output_dir, f"frame_{saved_count:03d}.png")
        cv2.imwrite(output_path, frame)
        print(f"Saved {output_path}")
        saved_count += 1
        
    count += 1

cap.release()
print(f"Extraction complete. Saved {saved_count} frames.")
