package vedledle.controller.dto;

import org.springframework.web.multipart.MultipartFile;

public record ImageUploadRequest(String name, MultipartFile image) {
}
