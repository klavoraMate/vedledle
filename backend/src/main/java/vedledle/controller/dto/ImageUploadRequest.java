package vedledle.controller.dto;

import org.springframework.web.multipart.MultipartFile;

/**
 * The {@code ImageUploadRequest} class represents the request for uploading an image.
 * It contains the image name and the multipart file representing the image data.
 */
public record ImageUploadRequest(String name, MultipartFile image) {
}
